/*onchanged function in default*/
function maximum(json){
	var maximum = json[0]
	for(var i=0; i<json.length; i++){
		if(json[i]<maximum){
			continue;
		}else{
			maximum = json[i];
		}
	}
	return maximum;
}

/*for node operation*/

function removeC(parent,child){
	while(parent.firstchild){
		parent.removeChild(firstchild);
	}	
}

function succesiveAppend(parent,element){
	var temp = element;
	parent.appendChild(temp);
}

/*writing line to create graph*/
function line(radian,width,x,y){
	var degree = radian*180/Math.PI ;
	var divtag = document.createElement("div");
		divtag.setAttribute("class","line");
	var rotate = "transform:rotate(" + degree + "deg);";
	var origin = "transform-origin:" + "top" +  " left" + ";"; 
	var cordinate = "top:" + y + "px;" + "left:"+ (x - 3) +"px;"; 
	var width = "width:" + width + "px;";
	var style = origin+rotate+cordinate+width;
		divtag.setAttribute("style",style);
	return divtag;
}

function createGraph(json,onchange){
	var graph = document.getElementById("graph");
	var request = {};
		request.type="browser action";
		request.when="createGraph";
		request.term = document.getElementById("term").value;
	if(onchange){
	/*for onchange with chrome send message function*/
	chrome.runtime.sendMessage(request,function(response){
		var response = response.term;
		console.log(term)
		/*remove td elements in each tr childs*/
		graph = graph.getElementsByClassName("graph")[0];
		for (var i = tr.length - 1; i >= 0; i--){
			while(tr[i].firstChild){
				tr[i].removeChild(tr[i].firstChild);
			}
		}
	/*append td elements by term length*/
		var td = document.createElement("td")
		console.log(response)
		for(var i=0; i<tr.length; i++){
			for(var s=0; s<response.length; s++){
				tr[i].appendChild(td);
				td = document.createElement("td")
			}
		}
			tr = graph.getElementsByTagName("tr")
	/*set unit to graph for each date*/
		var xTarget = tr[tr.length-1].childNodes;
		var yTarget = tr;
		var max = maximum(response);
			unitStride = max/6;
			yStride = 50;
			start= 40;
		/*set y-unit*/
		for (var i=0; i<tr.length; i++){
			var temp = "top:";
				temp += start+yStride*i +"px;";
			var td = tr[i].getElementsByTagName("td")[0];
			var p = document.createElement("p")
				p.setAttribute("class","gy");
				if(i==0){
					p.textContent = "feeds";
				}else{
					p.textContent = Math.round(max-unitStride*i);
				}
				p.setAttribute("style",temp);
				td.appendChild(p);
		}
		/*write unit for x*//*must rewrite*/
		/* width = 594; */
			var xStride =  576/(response.length);
			var threshold = 16;
			console.log(xStride)
			for (var i = 0; i<response.length; i++){
				var p = document.createElement("p");
				var temp;
				if(i==0){
					if(xStride>=72){
						temp = "right:" + 20 + "px;";
						p.textContent = "ago(days)"; 
						p.setAttribute("class","gx");
						p.setAttribute("style",temp);
						xTarget[i].appendChild(p);
						p = document.createElement("p")
					}else{
						temp = "bottom:" + 65 + "px;" + "right:" + 20 + "px;";
						p.textContent = "ago(days)"; 
						p.setAttribute("class","gx");
						p.setAttribute("style",temp);
						xTarget[i].appendChild(p);
						p = document.createElement("p")
					}
				}
				if(threshold<=576/response.length){
					console.log("true")
					temp = "right:" + (594-(xStride*i)) + "px;";
					p.textContent= response.length-i-1;
					p.setAttribute("class","gx");
					p.setAttribute("style",temp);
					console.log(xTarget,p)
					xTarget[i].appendChild(p);
				}else{
					var divisor = Math.ceil(threshold/xStride);
						if(i%divisor == 0){
							temp = "right:" + (594-(xStride*i)) + "px;";
							p.textContent= response.length-i-1;
							p.setAttribute("class","gx");
							p.setAttribute("style",temp);
							console.log(xTarget,p)
							xTarget[i].appendChild(p);
						}
					}
			}
		/*write dot to graph*/
		/*in absolute position, top:26px is highest position in y cordinate, 
		and top:326px is lowest value; stride is 50px;*/
		/*in absolute position, rightest positioni is right:82px; leftest:position is left:594px;
		stride is 64px;*/
		var Xcordinate = new Array();
		var Ynumber = new Array();
		for(var i=0; i<response.length; i++){
			var p = document.createElement("p")	
				mappingPoint = (300/max) *-response[i] + 326;
			var tempX = "left:"+(594-(576/(response.length))*i-(576/(response.length))) + "px;"
				tempY = "top:" + mappingPoint + "px;"
			var temp = tempX + tempY;
				p.setAttribute("class","dot");
				p.setAttribute("style",temp);
				xTarget[i].appendChild(p);
			/*attach onmouse event*//*rewrite to add event listener*/
			var div = document.createElement("div");
			var p = document.createElement("p");
				div.appendChild(p);
			var x = 594-(576/(response.length))*i-(576/(response.length));
			var y = mappingPoint + 8;
			var detail = response[i];
			var style = new Array();
			var temp = "top:"+ y +"px;" + "left:"+ x +"px;" ;
				style[i] = temp;
			var dot = document.getElementsByClassName("dot")[i];
				dot = dot.getAttribute("style");
				dot = dot.match(/left:([\.|0-9]+)px;/)[1];
				Xcordinate[i] = dot;
				Ynumber[i] = response[i];
				div.addEventListener("mouseover",function(){
					var num = this.parentNode;
						num = num.getElementsByClassName("dot")[0];
						num = num.getAttribute("style");
						num = num.match(/left:([0-9]+)px;/)[1];
					var bound = num
						for(var i=0; i<Xcordinate.length; i++){
							if(num==Xcordinate[i]){
								num = Ynumber[i];
								break;
							}
						}
					if(bound>594-594*2/(1+Math.sqrt(5))){
						console.log(true)
						var p = this.childNodes[0]
							p.setAttribute("class","detail");
							p.setAttribute("style","position:absolute;right:20px;"+"width:" + (((num.toString()).length)*15 + 100) + "px;" + "height:" + 40 + "px;")
							p.textContent = "\"" + num + "\"" + "feeds";
					}else{
						var p = this.childNodes[0]
							p.setAttribute("class","detail");
							p.setAttribute("style","width:" + (((num.toString()).length)*15 + 100) + "px;" + "height:" + 40 + "px;")
							p.textContent = "\"" + num + "\"" + "feeds";
					}
					},false);
			/*attach onremove event*/
				div.addEventListener("mouseout",function(){
					var p = this.childNodes[0]; 
						p.removeAttribute("class","detail");
						p.removeAttribute("style");
						p.textContent = "";
				},false);
				div.setAttribute("class","reserve");
				div.setAttribute("style",style[i]);
				xTarget[i].appendChild(div);
		}
		/*write line to graph*/
		var temp = new Array(2);
		var height = new Array(2);
		var regY = /top:([0-9|\.]+)px;/;
		var regX = /left:([0-9|\.]+)px;/;
		for(var i=0; i<response.length-1; i++){
			var diff;
				temp[0]= document.getElementsByClassName("dot")[i];
				temp[0]= temp[0].getAttribute("style");
				temp[1]= document.getElementsByClassName("dot")[i+1];
				temp[1]= temp[1].getAttribute("style");
			/*to calc radian for line*/
			var x = parseInt(temp[0].match(regX)[1])-parseInt(temp[1].match(regX)[1])
			var y =  parseFloat(temp[0].match(regY)[1])-parseFloat(temp[1].match(regY)[1]) 
			var tan = y/x;
			var radian = Math.atan(tan);
			var width = Math.sqrt(x*x+y*y);
			var polygonal = line(radian,width,parseInt(temp[1].match(regX)[1]) + 7,parseFloat(temp[1].match(regY)[1]) + 15);
				xTarget[i].appendChild(polygonal);
		}	
	})}else{
	/*remove td elements in each tr childs*/
		graph = graph.getElementsByClassName("graph")[0];
		tr = graph.getElementsByTagName("tr")
		for (var i = tr.length - 1; i >= 0; i--){
			while(tr[i].firstChild){
				tr[i].removeChild(tr[i].firstChild);
			}
		}
	/*append td elements by term length*/
			var td = document.createElement("td")
			for(var i=0; i<tr.length; i++){
				for(var s=0; s<json.length+1; s++){
					tr[i].appendChild(td);
					td = document.createElement("td")
				}
			}
	/*set unit to graph for each date*/
		var xTarget = tr[tr.length-1].childNodes;
		var yTarget = tr;
		var max = maximum(json);
			unitStride = max/6;
			yStride = 50;
			start= 40;
		/*set y-unit*/
		for (var i=0; i<tr.length; i++){
			var temp = "top:";
				temp += start+yStride*i +"px;";
			var td = tr[i].getElementsByTagName("td")[0];
			var p = document.createElement("p")
				p.setAttribute("class","gy");
				if(i==0){
					p.textContent = "feeds";
				}else{
					p.textContent = Math.round(max-unitStride*i);
				}
				p.setAttribute("style",temp);
				td.appendChild(p);
		}
		/*write unit for x*//*must rewrite*/
		/* width = 594; */
			var start = 82;
			var xStride = (594-82)/(json.length);
			for (var i = json.length; i>=0; i--){
				var p = document.createElement("p");
				var temp
				if(i==0){
					temp = "right:" + (start-xStride) + "px;";
					p.textContent = "ago(days)";
				}else{
					 temp = "right:" + (start+xStride*(i)) + "px;";
					p.textContent= i-1;
				}
					p.setAttribute("class","gx");
					p.setAttribute("style",temp);
					xTarget[i].appendChild(p);
			}
		/*write dot to graph*/
		/*in absolute position, top:26px is highest position in y cordinate, 
		and top:326px is lowest value; stride is 50px;*/
		/*in absolute position, rightest positioni is right:82px; letest:position is left:594px;
		stride is 64px;*/
		var Xcordinate = new Array();
		var Ynumber = new Array();
		for(var i=0; i<json.length; i++){
			var p = document.createElement("p")	
				mappingPoint = (300/max) *-json[i] + 326;
				xTarget[i].appendChild(p);
			var tempX = "left:"+(576-64*i + -109) + "px;"
				tempY = "top:" + mappingPoint + "px;"
			var temp = tempX + tempY;
				p.setAttribute("class","dot");
				p.setAttribute("style",temp);
				xTarget[i].appendChild(p);
			/*attach onmouse event*//*rewrite to add event listener*/
			var div = document.createElement("div");
			var p = document.createElement("p");
				div.appendChild(p);
			var x = (576-64*i + -109) - 4;
			var y = mappingPoint + 8; 
			var detail = json[i]
			var style = new Array();
			var temp = "top:"+ y +"px;" + "left:"+ x +"px;" ;
				style[i] = temp;
			var dot = document.getElementsByClassName("dot")[i];
				dot = dot.getAttribute("style");
				dot = dot.match(/left:([0-9]+)px;/)[1];
				Xcordinate[i] = dot;
				Ynumber[i] = json[i];
				div.addEventListener("mouseover",function(){
					var num = this.parentNode;
						num = num.getElementsByClassName("dot")[0];
						num = num.getAttribute("style");
						num = num.match(/left:([0-9]+)px;/)[1];
						for(var i=0; i<Xcordinate.length; i++){
							if(num==Xcordinate[i]){
								num = Ynumber[i];
								break;
							}
						}
					var p = this.childNodes[0]
						p.setAttribute("class","detail");
						p.setAttribute("style","width:" + (((num.toString()).length)*15 + 100) + "px;" + "height:" + 40 + "px;")
						p.textContent = "\"" + num + "\"" + "feeds";
					},false);
			/*attach onremove event*/
				div.addEventListener("mouseout",function(){
					var p = this.childNodes[0]; 
						p.removeAttribute("class","detail");
						p.removeAttribute("style");
						p.textContent = "";
				},false);
				div.setAttribute("class","reserve");
				div.setAttribute("style",style[i]);
				xTarget[i].appendChild(div);
		}
		/*write line to graph*/
		var temp = new Array(2);
		var height = new Array(2);
		var regY = /top:([0-9|\.]+)px;/;
		var regX = /left:([0-9]+)px;/;
		for(var i=0; i<json.length-1; i++){
			var diff;
				temp[0]= document.getElementsByClassName("dot")[i];
				temp[0]= temp[0].getAttribute("style");
				temp[1]= document.getElementsByClassName("dot")[i+1];
				temp[1]= temp[1].getAttribute("style");
			/*to calc radian for line*/
			var x = parseInt(temp[0].match(regX)[1])-parseInt(temp[1].match(regX)[1])
			var y =  parseFloat(temp[0].match(regY)[1])-parseFloat(temp[1].match(regY)[1]) 
			var tan = y/x;
			var radian = Math.atan(tan);
			var width = Math.sqrt(x*x+y*y);
			var polygonal = line(radian,width,parseInt(temp[1].match(regX)[1]) + 7,parseFloat(temp[1].match(regY)[1]) + 15);
				xTarget[i].appendChild(polygonal);
		}	
	}
}

function getDate(date){
	/*for setting cordinate*/
	var current = document.getElementById("current");
		current.textContent = "";
	if(date==null){
		return;
	}else{
		current.textContent = date;
	}
}

function opmlExport(){
	alert("opml!")
	var request = {};
		request.when="export"
		request.type="browser action";
	chrome.runtime.sendMessage(request,function(response){
		createGraph(response.date,false);
	})
}

/*for init*/
function init(){
	console.log("init");
	var request = {};
		request.type = "browser action";
		request.when = "init";
	chrome.runtime.sendMessage(request,function(response){
		console.log(response)
		getDate(response.date,false);
		createGraph(response.term,false);
	})
}

document.onreadystatechange = function(){
	if(document.readyState == "complete"){
		var exp = document.getElementById("export");
		var term = document.getElementById("term");
			exp = exp.addEventListener("click",function(){
				opmlExport();
			});
			term = term.addEventListener("change",function(){
				createGraph(null,true)}
			);
		init();
	}
}