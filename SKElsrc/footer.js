function footerScript(pageLevel){
	var year = new Date().getFullYear(); var t=".";
	if (pageLevel == 1){
		document.write("<div class='copyright'>2020-"+year+"</div>");
		document.write("<div class ='channelID'><a href='https://www.youtube.com/channel/UCC9z07qxRHUtHBVfFlETohA/' target='_blank'><img class='ytLogo' src='SKElsrc/yt_icon_mono_dark.png'>Rum Onspan Music</a></div>");
	} 
	else if (pageLevel>=1.5){
		document.write("<div class='copyright'>2020-"+year+"</div>");
		document.write("<div class='channelID'><a href='https://www.youtube.com/c/sahabatkreatifel' target='_blank'><img class='ytLogo' src='");
		for(var i = 1; i<= pageLevel; i++){
			document.write(t);
		}
		document.write("/SKElsrc/"+yt_icon_mono_dark.png+">Sahabat Kreatif El</a></div>");
	}
}