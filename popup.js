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

function createGraph(json){
	console.log("graph is called")
	var css = document.createElement("table")
	var maximum = maximug(json);
	/*create graph paper*/
	for(var i=0; i<json.length; i++){
		tr = createElement("tr");
		tr.setAttribute("class","graph");
	}
	css.innerHTML = css;
	/*dot date to graph*/
	var convertRate = 95/maximum;
	var td=document.getElementById[i]
	for(var i=0; i<tr.length; i++){
		var cordinate = "top:" json[i]*cordinate + "%" + ";" "left:" + i*100/json.length +"%";
		tr.setAttribute("style",);
	}
	/*add connecting line*/
	for(var i=0; i<tr.length; i++){
		
	}
	var target = document.getElementById("graph");
		target.appendChild(css);
}

function getDate(this){
	consol.log("getDate is called")
	var state = false;
	var item = "init"
	if(!state){
		chrome.runtime.sendMessage(item,function(response){
			this.appendChild(response);
		})
		state = true;
	}else{
		this.textContent = date;
	}
}

function accountList(){
	cosole.log("accountList is called");
	var item;
		item.type = "netvibes";
	var div = createElement("div")
	chrome.runtime.sendMessage(item,function(response){
		for(var i=0 i<response.length; i++){
			var li = createElement["li"];
				li.innerHTML = response[i];
				div.appendChild(li)
		}
		this.appendChild(div);
	})
}