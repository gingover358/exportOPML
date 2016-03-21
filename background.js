/*to count dayly feeds*/
var count = {
	"1":23,
	"2":31,
	"3":13,
	"4":56,
	"5":35,
	"6":47,
	"7":106
}

var latestExport="no export ever"


var account = {
	"forNetshop":{
		"id":"",
		"pass":""
	},
	"forAuction":{
		"id":"gingover95@gmail.com",
		"pass":"831936gdsl"
	},
	"forStore":{
		"id":"jing385@excite.co.jp",
		"pass":"831936gdsl"
	},
	"forSeller":{
		"id":"gingover@yahoo.co.jp",
		"pass":"831936gdsl"
	},
}

var buffer = 0;

/*registered site*/
var toXml={
	"1":{
		"1":{
			"append":"http://search.shopping.yahoo.co.jp/"
		},
		"2":{
			"append":"rss?ei=UTF-8"
		},
		"3":{
			"regex":"&p=[a-z|A-Z|0-9|%]&va=&ve="
		},
		"4":{
			"append":"&tab_ex=commerce&oq=&uIv=on&cid=&&used=0"
		},
		"5":{
			"regex":"&pf=[0-9]+"
		},
		"6":{
			"regex":"&pt=[0-9]+"
			},
		"7":{
			"regex":"&slider=[0-9]"
		}
		"8":{
			"regex":"&used=[0-9]"
		},
		"9":{
			"regex":"&seller=[0-9]"
		},
		"type":"mall"
	}
		
	"2":{
		"1":{
			"append":"http://auctions.search.yahoo.co.jp/rss?"
		},
		"2":{
			"regex":"p=[%|0-9|a-z|A-Z]"
			},
		"3":{
			"regex":"&oq=&auccat=[0-9]"
		},
		"4":{
			"regex":"&istatus=[0-9]"
		},
		"5":{
			"regex":"&price_type=currentprice&min=[0-9]+&max=[0-9]+"
		},
		"6":{
			"regex":"&f=[0-9|a-z]+"
		},
		"7":{
			"regex":"&fixed=[0-9]+"
		},
		"8":{
			"append":"&ei=UTF8"
		},	
		"type":"auction"		
	}
}


var toFeed43 ={
	"1":{
			"domain":"http://www.rakuten.co.jp/"	
			"global":"{%}",
			"item":"<h2>{%}</h2>{*}<div class=\"pad\">{%}</div>{*}<p class=\"price\">{%}</p>",
			"template":"{%2}/|{%3}/|{%1}",
			"type":"mall"
		}
}

var siteType ={
	"mall":
	"seller":
	"auction":
} 

var separator = /Date:([0-9|a-z|A-Z]),Register([0-9])/;

function term(type){
	var date = new Array();
	switch(type){
		case 7:
			chrome.storage.sync.get(count,function(result){				
				for(var i=0; i<7; i++){
					date.push(result[i]);
				}
			})
		break;
		case 14:
			chrome.storage.sync.get(count,function(result){				
				for(var i=0; i<14; i++){
					date.push(result[i]);
				}
			})
		break;
		case 30:
			chrome.storage.sync.get(count,function(result){				
				for(var i=0; i<30; i++){
					date.push(result[i]);
				}
			})
		break;
		case 180:
			chrome.storage.sync.get(count,function(result){				
				for(var i=0; i<180; i++){
					date.push(result[i]);
				}
			})
		break;
	}
}

function backup(array){
	/*create download place*/
	var div = document.createElement("div");
	var button = document.createElement("button");
	/*write all bookmark in the same format with formal backup in chrome web browser*/


	/*donwload*/
}

/* dividing function for feeds with type*/
function divideFeeds(object){
	switch(object.type){
		case "mall":
			mall.push(object);
		break;
		case "auction":
			auction.push(object);
		break;
		case "seller":
			seller.push(object);
		break;
		case "shop":
			shop.push(object);
		break;
	}
}

/*to converting each urls in bookmark folder to feed*/
function xml(url,json){
	var xmlURI;
	for(var i=0; i<json.length; i++){
		if(json[i][1]=="regex"){
			var reg = json[i][1]
			xmlURI += url.match(reg)
		}else{
			xmlURI +=json[i][1];
		}
	}
}

function feed43(url,object){
	var url = url;
	var object = object;
	
	/* for reload phase*/
	document.getElementById("url").value = url;
	document.getElementsByClassName("button")[0].click(); 

	/*addEventListener for extract phase*/
	document.getElementById("raw_date").addEventListener("chnage",function(){
		var globalText = document.getElementById("global_pattern");
		var itemText = document.getElementById("item_pattern");
			globalText.value = object.global;
			itemText.value  = object.item;
			document.getElementById("clipped_data").addEventListener("change",function(){
				document.getElementById("item_template").value = object.template;
				document.getElementById("preview").addEventListener("change",function(){
					feedlink =  feed43.com + document.getElementById("feed-link").getAttribute("href");
				})
				document.getElementsByClassName("input")[11].click();
			})
			document.getElementsByClassName("input")[5].click();
	})
}

function exportOPML(json,objectArray){
	/*get registered list*/
	var xmlArray=new Array();
	var feed43Array=new Array();

	/*create tempFolder for each vibes account*/
	var mall = new Array();
	var auction = new Array();
	var seller = new Array();
	var shop = new Array();

	/*distribute by rss distribution*/
	for(var i=0; i<array.length; i++){
		for(var s=0; s<toXml.length; s++){
			if(toXml[i][1].match(array[i])){
				array[i].url = xml(toXml[i],array[i].url)
				array[i].type = toXml[i]/type
				xmlArray.push(array[i]);
				array.splice(i,1);
			}
		for(var s=0; s<toFeed43.length; s++){
			if(toFeed43[s].match(array[i])){
				array[i].url = feed43(tofeed43[s],array[i].url);
				array[i].type = tofeed43[s].type;
				feed43Array.push(array[i]);
			}
		}
	}

	/*multi threding request*/


	/*create opml format*/
	var xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><opml version=\"1.0\"><head><title>富の種達（オークション）</title></head><body><outline title=\"General\" layout=\"4-4\" cols=\"4\" icon=\"http://www.netvibes.com/img/icons/house.gif\"/>"+
		for(var i=0; i<feed43Array.length; i++){
			divide(feed43Array[i]);
		}
		for(var i=0; i<xmlArray.length; i++){
			divide(feed43Array[i])
		}

		xml +="</outline></body></opml>"
}


chrome.storage.sync.get("count",function(result){
	if(result==null){
		chrome.storage.sync.set("count");
		chrome.storage.sync.set("latestExport");
		chrome.storage.sync.set("account");
		chrome.storage.sync.set("buffer");
		chrome.storage.sync.set("toXml");
		chrome.storage.sync.set("toFeed43")
	}else{
		chrome.storage.sync.get("count",function(result){
			count = result;
		});
		chrome.storage.sync.get("latestExport",function(result){
			latestExport = result;
		})
		chrome.storage.sync.get("account",function(result){
			account = result;
		})
		chrome.storage.sync.get("buffer",function(result){
			buffer = result;
		})
		chrome.storage.sync.get("toxml",function(result){
			toXml = result;
		})
		chrome.storage.sync.get("toFeed43",function(result){
			toFeed43 = result;
		}
	}
})

chrome.runtime.onMessage.addListener(response,sender,sendResponse){
	var account
	switch(response.type){
		case "browser action":{
			switch(response.when){
				case "export":
					/*backup feeds*/
					/*create opml file*/
					chrome.bookmarks
				break;
				case "init":
					var item;
						item.term = term(7);
						chrome.storage.sync.get(account,function(result){
							item.account = result;
							sendResponse(item)
						})
				break;
				case "log":
					var term = term(response.term);
					sendResponse(term);
				break;
				case "vibesFromBrowseAction":
					chrome.tabs.create({"url":"https://www.netvibes.com/signin"},function(){
						chrome.tabs.executeScript(tab.id,{file: "netvibes.js", runAt:"document.end"}function(){
							chrome.tabs.sendMessage(response.account);
						}
					)})
					sendResponse("success");
				break;
		case "option":{
			switch(response.type){
				case "toXml":
					toXml[toXml.length] = response.json;
					chrome.storage.sync.set("toXml",function(result){
						console.log("success")
					})
					sendResponse("success")
				break;
				case "feed43":
					Feed43[Feed43.length]=response.json
					chrome.storage.sync.set("Feed43",function(){
						console.log("success")
					})
					sendResponse("success")
				break;
				case "account":
					account[account.length]=response.json
					chrome.storage.sync.set("account",function(){
						console.log("success")
					})
				break;
			}
		}
	}
}
