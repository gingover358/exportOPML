/*to count dayly feeds*/
count = {
	"0":45,
	"1":23,
	"2":31,
	"3":13,
	"4":56,
	"5":13,
	"6":47,
	"7":106,
	"8":32,
	"9":100,
	"10":85,
	"11":51,
	"12":3,
	"13":51,
	"14":53,
	"15":15,
	"16":15,
	"17":19,
	"18":90,
	"19":54,
	"20":32,
	"21":32,
	"22":22,
	"23":37,
	"24":87,
	"25":45,
	"26":32,
	"27":63,
	"28":82,
	"29":32,
	"30":43,
	"31":64,
	"32":87,
	"33":89,
	"34":75,
	"35":45,
	"36":35,
	"37":63,
	"38":64,
	"39":23,
	"40":53,
	"41":75,
	"42":38,
	"43":100,
	"44":61,
	"45":33,
	"46":15,
	"47":11,
	"48":85,
	"49":32,
	"50":14,
	"51":18,
	"52":106,
	"53":35,
	"54":70,
	"55":55,
	"56":22,
	"57":36,
	"58":103,
	"59":33,
	"60":2,
	"61":1,
	"62":5,
	"63":35
}

latestExport="no export ever";

buffer = 0;

toHtml={
	"0":{
		"0":{
			"append":"http:\/\/search\.shopping\.yahoo.co\.jp\/search?ei=UTF-8",
		},
		"1":{
			"regex":"&p=([%|[A-Z]|[a-z]|[0-9]|\\+|-|ー])+",
		},
		"2":{
			"append":"&tab_ex=commerce&uIv=on",
		},
		"3":{
			"regex":"&pf=([0-9]+)",
		},
		"4":{
			"regex":"&pt=([0-9]+)",
		},
		"5":{
			"append":"&X=2&used=2&t_used=2",
		},
		"domain":{
			"0":"http://search.shopping.yahoo.co.jp/"
		},
	},
	"1":{
		"0":{
			"append":"http://search.rakuten.co.jp/search/",
		},
		"1":{
			"regex":"mall/([A-Z]|[0-9]|%)+",
		},
		"2":{
			"regex":"/([0-9])+/"
		},
		"3":{
			"regex":"&max=([0-9]+)",
		},
		"4":{
			"regex":"&min=([0-9]+)"
		},
		"5":{
			"append":"&myButton=%E6%A4%9C%E7%B4%A2%E3%81%99%E3%82%8B&myButton.x=0&myButton.y=0&x=0",
		},
		"domain":{
			"0":"http://search.rakuten.co.jp/"
		}
	}
}

toXml={
	"0":{
		"0":{
			"append":"http://search.shopping.yahoo.co.jp/",
		},
		"1":{
			"append":"rss?ei=UTF-8",
		},
		"2":{
			"regex":"&p=([%|[A-Z]|[a-z]|[0-9]|\\+|-|ー])+",
		},
		"3":{
			"append":"&tab_ex=commerce&oq=&uIv=on&cid=&used=0",
		},
		"4":{
			"regex":"&pf=([0-9]+)",
		},
		"5":{
			"regex":"&pt=([0-9]+)",
			},
		"6":{
			"append":"&X=2",
		},
		"7":{
			"regex":"&slider=([0-9])",
		},
		"8":{
			"regex":"&used=([0-9])",
		},
		"9":{
			"regex":"&seller=([0-9])",
		},
		"10":{
			"append":"elc=1"
		},
		"type":"mall",
		"domain":{
			"0":"http:\/\/search\.shopping\.yahoo\.co\.jp\/"
		},
		"price":{
			"priceCut":0.3,
			"low":"&pf=([0-9]+)",
			"high":"&pt=([0-9]+)"
		}
	},	

	"1":{
		"0":{
			"append":"http://auctions.search.yahoo.co.jp/rss?",
		},
		"1":{
			"regex":"p=([%|[A-Z]|[a-z]|[0-9]|\\+|-|ー])+",
			},
		"2":{
			"regex":"&oq=&auccat=([0-9])",
		},
		"3":{
			"regex":"&istatus=([0-9])",
		},
		"4":{
			"regex":"&min=([0-9]+)",
		},
		"5":{
			"regex":"&max=([0-9]+)",
		},
		"6":{
			"regex":"&f=([0-9|a-z])+",
		},
		"7":{
			"regex":"&fixed=([0-9])+",
		},
		"8":{
			"append":"&aucmin_bidorbuy_price=&aucmax_bidorbuy_price=&abatch=0&istatus=0&gift_icon=0&f=0x4&f_adv=1&charity=&fixed=0&ei=UTF8"
		},	
		"type":"auction",
		"domain":{
			"0":"http:\/\/auctions\.search\.yahoo\.co\.jp\/"
		},
		"price":{
			"priceCut":0.15,
			"low":"&min=([0-9]+)",
			"high":"&max=([0-9]+)"
		}
	},
	"2":{
		"0":{
			"append":"http://auctions.search.yahoo.co.jp/rss?",
		},
		"1":{
			"regex":"&va=([%|[A-Z]|[a-z]|[0-9]|\\+|-|ー])+",
		},
		"2":{
			"regex":"&oq=&auccat=([0-9])",
		},
		"3":{
			"regex":"&istatus=([0-9])",
		},
		"4":{
			"regex":"&min=([0-9]+)",
		},
		"5":{
			"regex":"&max=([0-9]+)",
		},
		"6":{
			"regex":"&f=([0-9|a-z])+",
		},
		"7":{
			"regex":"&fixed=([0-9])+",
		},
		"8":{
			"append":"&aucmin_bidorbuy_price=&aucmax_bidorbuy_price=&abatch=0&istatus=0&gift_icon=0&f=0x4&f_adv=1&charity=&fixed=0&ei=UTF8",
		},
		"type":"auction",
		"domain":{
			"0":"http:\/\/closedsearch\.auctions\.yahoo\.co\.jp\/",
		},
		"price":{
			"priceCut":0.15,
			"low":"&min=([0-9]+)",
			"high":"&max=([0-9]+)"
		}
	},
	"3":{
		/*for self-hosted rakuten rss service*/
		"0":{
			"":"",
		},
		"1":{
			"":"",
		},
		"type":"mall",
		"domain":{
			"0":"http\:\/\/search.rakuten.co.jp\/"
		},
		"price":{
			"priceCut":0.3,
			"low":"&pf=([0-9]+)",
			"high":"&pt=([0-9]+)"
		}
	}
}

/*
	/*rss feeds url for titly only search
		http://auctions.search.yahoo.co.jp/search?va=%E3%82%A2%E3%83%9E%E3%82%BE%E3%83%B3&amp;vo=&amp;ve=&amp;ngrm=2&amp;auccat=0&amp;aucminprice=1000&amp;aucmaxprice=
3000&amp;aucmin_bidorbuy_price=&amp;aucmax_bidorbuy_price=&amp;l0=0&amp;abatch=0&amp;istatus=0&amp;fixed=0&amp;gift_icon=0&amp;charity=&amp;ei=UTF-8&amp;tab_ex=commerce&amp;slider=0
&amp;f_adv=1&amp;fr=auc_adv&amp;f=0x4

	/*rss feeds url for searcehing in title and description
		http://auctions.search.yahoo.co.jp/search?min=1000&amp;max=3000&amp;price_type=currentprice&amp;ei=UTF-8&amp;p=%E3%82%A2%E3%83%9E%E3%82%BE%E3%83%B3&amp;
oq=&amp;auccat=0&amp;tab_ex=commerce&amp;slider=0

*/

toFeed43 ={
	"0":{
			"domain":"http://search.rakuten.co.jp/",
			"global":"{%}",
			"item":"<h2>{%}</h2>{*}<div class=\"pad\">{%}</div>{*}<p class=\"price\">{%}</p>",
			"template":"{%2}/|{%3}/|{%1}",
			"type":"mall"
		}
}

var siteType = new Array("mall","seller","auction","shop");

var separator = /Date:([0-9|a-z|A-Z]),Register([0-9])/;

function termRequest(type,callback){
	var date = new Array();
	switch(type){
		case 7:		
			for(var i=0; i<8; i++){
				date.push(count[i]);	
			}
		break;
		case 14:
			for(var i=0; i<16; i++){
				date.push(count[i]);	
			}
		break;
		case 28:
			for(var i=0; i<32; i++){
				date.push(count[i]);	
			}
		break;
		case 56:
			for(var i=0; i<64; i++){
				date.push(count[i]);	
			}
		break;
	}
	return date;
}

function backup(parent,feeds,fileName){
	/*create backup folder*/
	var date = new Date();
	var name = "backup"+ date.toUTCString();
	/*write all bookmark in the same format with formal backup in chrome web browser*/
	/*
	/*remove feeds from folder*/
	saveHTML(parent,feeds,fileName);
}

function removeBookmark(id){
	chrome.bookmarks.remove(id,function(){

	})
}

function createDt(object){
	/*
	removeBookmark(object.id);
	*/
	var outlineTitle ="\n\t\t<outline title=\"";
	var type = "\" type=\"rss\"";
	var htmlUrl = "\" htmlUrl=\"";
	var xmlUrl = "\" xmlUrl=\"";
	var endTag = "/>";
	var url = "";
	var Url = object.url;
	var json;
	for(var i=0; i<Object.keys(toHtml).length; i++){
		var domain = toHtml[i].domain;
		var reg = new RegExp(domain[0]);
		if(Url.match(reg)!==null){
			json = toHtml[i];
		}
	}
	if(json!==undefined){
		for(var i=0; i<Object.keys(json).length-1; i++){
			if(json[i].regex!==undefined){
				var reg = new RegExp(json[i].regex);
				if(Url.match(reg)!==null){
					url += Url.match(reg)[0];
				}
			}else{
				url += json[i].append;
			}
		}
	}else{
		url = object.url
	}
		url = url.replace(/&/g,"&amp;");
	var xml = object.xml;
		xml = xml.replace(/&/g,"&amp;");
	return  outlineTitle  + uetToDate(object.dateAdded)+ xmlUrl + xml+ htmlUrl + url + type + endTag;
}

/*to converting each urls in bookmark folder to feed*/
function xml(url,json,cut){
	var xmlURI = "";
	var keys = Object.keys(json);
	var turnOn = url.match(json.price.low)!==null;
	var limit = json.price.high;
		limit = new RegExp(limit)
	var cutBack = json.price.low;
		cutBack = new RegExp(cutBack);
	var per = json.price.priceCut;
		per = parseFloat(per);
	/* to set cutBack parameter for each feeds*/
	if(cut==true){
		if(url.match(cutBack)==null){
			for(var i=0; i<keys.length-3; i++){
				if(json[keys[i]].regex!==undefined){
					var reg = new RegExp(json[keys[i]].regex);
					if(reg.toString()==cutBack.toString()&&url.match(limit)!==null){
						if(url.match(/http:\/\/closedsearch\.auctions\.yahoo\.co\.jp\//)||url.match(/http:\/\/auctions\.search\.yahoo\.co\.jp\//)!==null){
							var price = Math.ceil(parseInt(url.match(limit)[1])*per);
							var regex = cutBack.toString();
								regex = regex.replace(/\(\[0\-9\]\+\)/,price.toString());
								regex = regex.replace(/\//g,"")
								xmlURI += yahooAuction(reg,regex);
						}else{
							var price = Math.ceil(parseInt(url.match(limit)[1])*per);
							var regex = cutBack.toString();
								regex = regex.replace(/\(\[0\-9\]\+\)/,price.toString());
								regex = regex.replace(/\//g,"")
								xmlURI += regex;
						}
					}else if(url.match(reg)!==null){
						if(url.match(/http:\/\/closedsearch\.auctions\.yahoo\.co\.jp\//)||url.match(/http:\/\/auctions\.search\.yahoo\.co\.jp\//)!==null){
							xmlURI += yahooAuction(reg,url.match(reg)[0]);
						}else{
							xmlURI += url.match(reg)[0];
						}
					}
				}else{
					xmlURI +=json[keys[i]].append;
				}
			}
		}else{
			for(var i=0; i<keys.length-3; i++){
				if(json[keys[i]].regex!==undefined){
					var reg = new RegExp(json[keys[i]].regex);
					if(url.match(reg)!==null){
						if(url.match(/http:\/\/closedsearch\.auctions\.yahoo\.co\.jp\//)||url.match(/http:\/\/auctions\.search\.yahoo\.co\.jp\//)!==null){
							xmlURI += yahooAuction(reg,url.match(reg)[0]);
						}else{
							xmlURI += url.match(reg)[0];
						}
					}
				}else{
					xmlURI +=json[keys[i]].append;
				}
			}
		}
	}else{
		for(var i=0; i<keys.length-3; i++){
			if(json[keys[i]].regex!==undefined){
				var reg = new RegExp(json[keys[i]].regex);
				if(url.match(reg)!==null){
					if(url.match(/http:\/\/closedsearch\.auctions\.yahoo\.co\.jp\//)||url.match(/http:\/\/auctions\.search\.yahoo\.co\.jp\//)!==null){
						xmlURI += yahooAuction(reg,url.match(reg)[0]);
					}else{
						xmlURI += url.match(reg)[0];
					}
				}
			}else{
				xmlURI +=json[keys[i]].append;
			}
		}
	}
	return xmlURI;
}

/*test function for add json date for addin create feeds in rakuten.co.jp  with rakufeed*/ 
function rakufeed(url,json){
	var minReg = /min=([0-9]+)/;
	var maxReg = /max=([0-9]+)/;
	var keywordReg = /(%|[A-Z]|[0-9]|\+)+/;
	var keyword = url.match(keywordReg)[0]
	var rakufeed = "https://www.kuroneko-square.net/services/rakuten/rest?api=IchibaItemSearch&keyword="
	var cutBack = json.price.priceCut;
	var xmlURI = new Array();
		xmlURI.push(rakufeed);
		xmlURI.push(keyword);
		xmlURI.push("&field=0&orFlag=0&NGKeyword=&minItemPrice=&maxItemPrice=");
		if(url.match(minReg)!==null){
			xmlURI.push("&minPrice=" + url.match(minReg)[1]);
		}else{
			xmlURI.push("&minPrice=");	
		}
		if(url.match(maxReg)!==null){
				xmlURI.push("&maxPrice=" + url.match(maxReg)[1]);
				if(xmlURI[xmlURI.length-2].match(cutBack)==null){	
					var price = url.match(maxReg)[1];
						price = Math.ceil(parseInt(price)*cutBack);
						xmlURI[xmlURI.length-2] += price;
				}
		}else{
			xmlURI.push("&maxPrice=");
		}
		xmlURI.push("&newFlag=0&imageFlag=0&itemType=0&blowFlag=0&y1startFlag=0&anonymityFlag=0&postageFlag=0&postageFreeFlag=0&closedFlag=1&bidStatus=0&shopCode=&itemCode=&purchaseType=0&asurakuFlag=0&pointRateFlag=0&creditCardFlag=0&giftFlag=0&hasReviewFlag=0&appointDeliveryDateFlag=0&availability=0&outOfStockFlag=0&chirayomiFlag=0&limitedFlag=0&sort=%2BitemPrice&format=rss2")
	var feedURI = "";
	for(var i=0; i<xmlURI.length; i++){
		feedURI += xmlURI[i]; 
	}
	console.log(feedURI)
	return feedURI;

/*
	sanmple url that search in rakuten icchinba with lowest price sort;
	https://www.kuroneko-square.net/services/rakuten/rest?api=IchibaItemSearch&amp;keyword=amazon
	&amp;field=1&amp;orFlag=0&amp;NGKeyword=
	&amp;minItemPrice=
	&amp;maxItemPrice=
	&amp;minPrice=1000
	&amp;maxPrice=100000
	&amp;newFlag=0&amp;imageFlag=0&amp;itemType=0&amp;blowFlag=0&amp;y1startFlag=0&amp;anonymityFlag=0&amp;postageFlag=0&amp;postageFreeFlag=0&amp;closedFlag=1&amp;bidStatus=0&amp;shopCode=&amp;itemCode=&amp;purchaseType=0&amp;asurakuFlag=0&amp;pointRateFlag=0&amp;creditCardFlag=0&amp;giftFlag=0&amp;hasReviewFlag=0&amp;appointDeliveryDateFlag=0&amp;availability=0&amp;outOfStockFlag=0&amp;chirayomiFlag=0&amp;limitedFlag=0&amp;sort=%2BitemPrice&amp;format=rss2
	
*/
}

/* imcomplete function. please don't use;*/
function feed43(url,object){
/*sample url*/	

/*
http://search.rakuten.co.jp/search/mall/%E3%82%A2%E3%83%9E%E3%82%BE%E3%83%B3/?grp=product&amp;pc_search=%E9%80%81%E4%BF%A1
*/

/*sample objects*/
/*var toFeed43 ={
	"1":{
			"domain":"http://www.rakuten.co.jp/"	
			"global":"{%}",
			"item":"<h2>{%}</h2>{*}<div class=\"pad\">{%}</div>{*}<p class=\"price\">{%}</p>",
			"template":"{%2}/|{%3}/|{%1}",
			"type":"mall"
		}
}*/
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
/*
	/* feed url example searched in title and description*
		http://auctions.search.yahoo.co.jp/rss?va=%E3%81%82%E3%81%84%E3%81%86%E3%81%88%E3%81%8A
&amp;vo=&amp;ve=&amp;auccat=0&amp;aucminprice=1000&amp;aucmaxprice=5900&amp;aucmin_bidorbuy_price=
&amp;aucmax_bidorbuy_price=&amp;abatch=0&amp;istatus=0&amp;gift_icon=0&amp;f=0x4&amp;f_adv=1&amp;charity=&amp;fixed=0&amp;ei=UTF8

	/* feed url example searched in description*
		http://auctions.search.yahoo.co.jp/rss?p=%E3%82%A2%E3%83%9E%E3%82%BE%E3%83%B3&amp;
oq=&amp;auccat=0&amp;price_type=currentprice&amp;min=100&amp;max=200&amp;ei=UTF8

*/
function yahooAuction(regex,matched){
	if(matched!==undefined){
		switch(regex.toString()){
			case "/&va=([%|[A-Z]|[a-z]|[0-9]|\\+|-|ー])+/":
				return matched;
				break;
			case "/p=([%|[A-Z]|[a-z]|[0-9]|\\+|-|ー])+/":
				var reg = new RegExp(/p/);
				return matched.replace(reg,"va");
				break;
			
			case "/&oq=&auccat=([0-9])/":
				var reg = new RegExp(/&oq=/);
				return matched.replace(reg,"&vo=&ve=");
				break;
		
			case "/&istatus=([0-9])/":
				return matched;
				break;
		
			case "/&min=([0-9]+)/":
				var reg = new RegExp(/&min=/);
				return matched.replace(reg,"&aucminprice=");
				break;
		
			case "/&max=([0-9]+)/":
				var reg = new RegExp(/&max=/);
				return matched.replace(reg,"&aucmaxprice=");
				break;
		
			case "/&f=([0-9|a-z])+/":
				return matched;
				break;
		
			case "/&fixed=([0-9])+/":
				return matched;
			break;
		
			default:
				return "";
			break;
		}
	}else{
		return "";
	}
}

function asciToUint(string){
	var uint = new Uint8Array();
	for(var i=0; i<string.length; i++){
		uint += string[i].charCodeAt(0);
	}
	return uint;
}		

function saveHTML(parent,feeds,fileName){		
	var html = new Array();
		html[0] = "<!DOCTYPE NETSCAPE-Bookmark-file-1>\n<!-- This is an automatically generated file.\n\tIt will be read and overwritten.\n\tDO NOT EDIT! -->\n<META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\">\n<TITLE>Bookmarks</TITLE>\n<H1>Bookmarks</H1>\n<DL><p>\n\t<DT><H3 ADD_DATE=\"1453048403\" LAST_MODIFIED=\"1459527957\" PERSONAL_TOOLBAR_FOLDER=\"true\">ブックマーク バー</H3>\n\t<DL><p>\n\t<DT><H3 ADD_DATE=\"1453049843\" LAST_MODIFIED=\"1460043524\">feeds</H3><DL><p>"
		/*"<!DOCTYPE NETSCAPE-Bookmark-file-1><!-- This is an automatically generated file.It will be read and overwritten.DO NOT EDIT! --><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\"><TITLE>Bookmarks</TITLE><H1>Bookmarks</H1><DL><p><DT><H3 ADD_DATE=\"" + parent.dateAdded + "\"" + "LAST_MODIFIED=\"1459527957\" PERSONAL_TOOLBAR_FOLDER=\"true\">ブックマーク バー</H3><DL><p></DL><p><DT><H3 ADD_DATE=\"1453049843\" LAST_MODIFIED=\"1460043524\">feeds</H3><DL><p>"*/	var htmlEnd = "</DL><p></DL><p>";
	var content = "";
		for(var i=0; i<feeds.length; i++){
			content += "\n\t\t<DT><A HREF=\"" + feeds[i].url + "\"ADD_DATE=\"" + feeds[i].dateAdded + "\">" + feeds[i].title + "</A>"
		}
		html[1] = content;
		html[2] = htmlEnd;
	/*create blob*/
		var a = document.createElement("a");
			a.href = URL.createObjectURL(new Blob(html),{type:"text/plain"});
			a.download = fileName;
	/*download it!*/
			a.click();
}

function uetToDate(unixEpochTime){
	var date = new Date(unixEpochTime*1000);
	return date.toUTCString();
}

function saveOPML(feeds,fileName,tabTitle){
	var xml = new Array();
		xml[0] = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<opml version=\"1.0\">\n\t<head>\n\t\t<title></title>\n\t</head>\n\t<body>\n\t\t<outline title=\"General\" layout=\"4-4\" cols=\"4\" icon=\"http:\/\/www\.netvibes\.com\/img\/icons\/house\.gif\"\/><outline title=\""
		xml[1] = tabTitle + "\" icon=\"movie\" iconColor=\"green\" cols=\"3\" layout=\"3-0\">"
		xml[2] = "";
		xml[3] ="\n\t\t</outline>\n\t</body>\n</opml>";
		for(var i=0; i<feeds.length; i++){
				xml[2] += feeds[i];
		}
		if(feeds.length!==0){
			/*create blob*/
			var a = document.createElement("a");
				a.href = URL.createObjectURL(new Blob(xml),{type:"text/plain"});
				a.download = fileName;
			/*download it!*/
				a.click();
		}
}

function exportOPML(feedsArray,Xml,toFeed43){
	var toXml = new Array();
		for(var x in Xml.toXml){
			toXml.push(Xml.toXml[x])
		}
	/*get registered list*/
	var xmlArray=new Array();
	var feed43Array=new Array();

	/*create tempFolder for each vibes account*/
	var mall = new Array();
	var auction = new Array();
	var seller = new Array();
	var shop = new Array();

	/*distribute by rss distribution*/
	for(var i=0; i<feedsArray.length; i++){
		for(var s=0; s<Object.keys(toXml).length; s++){
			var url = feedsArray[i].url;
			var buf;
				if(i==0){
					buf = url;
				}else{
					buf = feedsArray[i-1].url;
				}
			var domain = toXml[s].domain
			for(var j=0; j<Object.keys(domain).length; j++){
				var reg = new RegExp(domain[j]);
				if(url.match(reg)){
					/*temporary treatment for rakuten that non-feeds mall*/
					var maxReg = /max=([0-9]+)/;
					if(url.match(/http:\/\/search\.rakuten\.co\.jp\//)!==null){
						feedsArray[i].xml = rakufeed(feedsArray[i].url,toXml[s]);
						feedsArray[i].type = toXml[s].type;
						xmlArray.push(feedsArray[i]);
					}else{
						feedsArray[i].xml = xml(url,toXml[s],true);
						feedsArray[i].type = toXml[s].type;
						xmlArray.push(feedsArray[i]);
					}
				}
			}
		}
		for(var s=0; s<toFeed43.length; s++){
			if(toFeed43[type].match(feedsArray[i])){
				feedsArray[i].url = feed43(tofeed43[s],feedsArray[i].url);
				feedsArray[i].type = tofeed43[s].type;
				feed43Array.push(array[i]);
			}else{
				/* to outsourcing*/
				/*register this site*/
			}
		}
	}
	/* divide feeds to each markets*/
		for(var i=0; i<feed43Array.length; i++){
			switch(feed43Array[i].type){
				case "mall":
					mall.push(createDt(feed43Array[i]));
				break;
				case "auction":
					auction.push(createDt(feed43Array[i]));
				break;
				case "seller":
					seller.push(createDt(feed43Array[i]));
				break;
				case "shop":
					shop.push(createDt(feed43Array[i]));
				break;
			}
		}
		for(var i=0; i<xmlArray.length; i++){
			switch(xmlArray[i].type){
				case "mall":
					mall.push(createDt(xmlArray[i]));
				break;
				case "auction":
					auction.push(createDt(xmlArray[i]));
				break;
				case "seller":
					seller.push(createDt(xmlArray[i]));
				break;
				case "shop":
					shop.push(createDt(xmlArray[i]));
				break;
			}
		}
	/*create opml date*/
	var date = new Date();
	saveOPML(mall,"mall"+Date.now()+".xml","モール");
	saveOPML(auction,"auction"+Date.now()+".xml","オークション");
	saveOPML(seller,"seller"+Date.now()+".xml","ヤフオクセラー");
	saveOPML(shop,"shop"+Date.now()+".xml","ネットショップ");
	/*counter()*/
}

/* for default setting*/
chrome.storage.sync.get("count",function(result){
	if(result.count == undefined){
		chrome.storage.sync.set({"count":count});
		chrome.storage.sync.set({"latestExport":latestExport});
		chrome.storage.sync.set({"buffer":buffer});
		chrome.storage.sync.set({"toXml":toXml});
		chrome.storage.sync.set({"toFeed43":toFeed43})
	}
})

function gotDate(){
	var date = new Date();
	var string = date.getFullYear().toString() + (date.getMonth() + 1).toString() + date.getDay().toString() + date.getHours();
	return string;
}

function couter(){ 
	var date = new Date();
	var buff = 0;
	var counter;
		chrome.storage.sync.get({"count":count},function(result){
			counter = result;
			chrome.storage.sync.get({"buffer":buffer},function(result){
				buf = result;
				if(date.getday()!==buf.date){
					/*delete oldest date*/
					/*penetrate 0*/
					chrome.storage.sync.set({"count":count},function(result){

					})
				}else{
					chrome.bookmarks.search("feeds",function(result){
						chrome.bookmarks.getChildren(result.id,function(result){
							var feeds = result.number - buf.count;
								count[0] = feeds;
						})
					})
				}
			})
		})
}

var selectedAccount = {};

chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
	switch(response.type){
		case "browser action":
			switch(response.when){
				case "export":
					/*backup feeds*//*create opml file*/
					var item = {};
						item.date = gotDate();
					chrome.bookmarks.search("feeds",function(result){
						var parent = result[0];
						chrome.bookmarks.getChildren(result[0].id,function(result){
							backup(parent,result,"backup" + item.date + "\.html");
							chrome.storage.sync.get("toXml",function(xml){
								var xml = xml;
								chrome.storage.sync.get("toFeed43",function(toFeed43){
									exportOPML(result,xml,toFeed43);
									sendResponse(item);	
								})
							})
						})
					})
					return true;
				break;
				case "init":
					/*
					counter(buf);
					*/
					var item = {};
						item.term = termRequest(7);
						item.date = latestExport;
						item.details = toXml;
					sendResponse(item);
				break;
				case "createGraph":
					var item = {};
						item.term = termRequest(Number(response.term))
						sendResponse(item);
					return true;
				break;
				case "vibesFromBrowseAction":
					chrome.tabs.create({"url":"https://www.netvibes.com/signin"},function(){
						chrome.tabs.executeScript(tab.id,{file: "netvibes.js", runAt:"document.end"}
					)})
					sendResponse("success");
				break;
			}
		case "option":
			switch(response.type){
				case "toXml":
					toXml[toXml.length] = response.json;
					chrome.storage.sync.set("toXml",function(result){
					})
					sendResponse("success");
				break;
				case "feed43":
					Feed43[Feed43.length]=response.json
					chrome.storage.sync.set("Feed43",function(){
					})
					sendResponse("success");
				break;
			}
	}
});