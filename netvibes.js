var response;
	response.type = "vibesLogin";

chrome.runtime.onMessaage(response,function(result){
	var id = document.getElementsByTagName("input")[0];
	var pass = document.getElementsByTagName("input")[3];
		id.value = result.id;
		pass.value = result.pass;
		setTimeout(1000,function(){
			document.getElementsByTagName("button")[0].click();
		}
})