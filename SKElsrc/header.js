function headerScript(pageLevel){
	var t = ".";
	if (pageLevel == 1){
		document.write("<h1>Sahabat Kreatif El</h1>");
	}else if (pageLevel==1.5){
		document.write("<a href='index.html'><h1>Sahabat Kreatif El</h1></a>");
	}
	 else if (pageLevel>=2){
	 	document.write("<a href='");
	 	for(var i = 1; i <= pageLevel; i++){
	 		document.write(t);
	 	}
	 	document.write("/index.html'><h1>Sahabat Kreatif El</h1></a>")	
	}
}