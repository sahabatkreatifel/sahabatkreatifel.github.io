function videoPages(n){
    var shortTitle = videoShortTitle(n);
    var code = videoCode(n);
    var embeddingvid = embedding(code);
    var tanggalString = tanggalUpload(n);
	var date1 = new Date(tanggalString);
    var uploadDate = date1.getDate();
	var uploadMonth = date1.getMonth();
	uploadMonth = monthString(uploadMonth);
	var uploadYear = date1.getFullYear();
	var date = new Date();
    var todayDate = date.getDate();
	var diffTime = Math.abs(date - date1);
	var diffYears = diffTime / (1000 * 60 * 60 * 24*365);
    var month = date.getMonth()+1;
    var monththeString = (getTodayDate(3));
    var year = date.getFullYear();
    var views = videoSelector(n,1,month, year,true,2);
    document.write("<h1 class='post-title'>"+shortTitle+"</h1>");
    document.write("<div class='videoContainerYt'>");
    document.write(embeddingvid);
    document.write("</div>");
    document.write("<h2>Judul Asli</h2>");
    document.write("<div class='judulAsli'>");
    document.write(videoTitle(n));
    document.write("</div>");
    document.write("<h2>Tanggal upload</h2>");
    document.write("<div class='textContainer'><p>");
    document.write(uploadDate+" "+uploadMonth+" "+ uploadYear+" ")
    videoAge(diffYears, n);
    document.write("</p></div>")
    document.write("<div class='textContainer'>");
    document.write("<h2>Jumlah Tontonan</h2>");
    document.write(views+" kali (Per "+todayDate+" "+monththeString+" "+year+" pukul 07.00 WIB)");
    document.write("</div>")
}
