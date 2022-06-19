if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 1380);
	// setInterval(loop, 500);

}

var x = 0;

var titleText = [ "Outubys", "Projects"];
// var titleText = [ "Outubys Pro", "utubys Proj", "tubys Proje", "ubys Projec", "bys Project", "ys Projects", "s Projects", "Projects O", "Projects Ou", "rojects Out", "ojects Outu", "jects Outub", "ects Outuby", "cts Outubys", "ts Outubys P", "s Outubys Pr", " Outubys Pr", "Outubys Pro"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}