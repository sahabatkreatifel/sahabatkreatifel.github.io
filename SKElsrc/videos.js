function videoTitle(videonum){
	var title = ["Bubur Ayam BUMBU RICA resep terbaru pakai kemangi dijamin enak. Cocok dinikmati bersama Keluarga",
				"Ikan Bawal asam manis NANAS pulau seribu. Cocok untuk menu ARISAN dan acara KELUARGA.",
				"Es Lidah Buaya LECI LEMON STRAWBERRY 🍋🍓Minuman segar dan bermanfaat👍",
				"Sayur Sop-sopan, sayur EKONOMIS tanpa PENYEDAP jadi MEWAH dan BERGIZI. Hanya 1 bumbu",
				"Tumis Sayur Oyong Telur dan Bihun Jagung. Menu simpel saat sibuk cocok untuk orang kerja",
				"Sop Ayam Fillet CACANA, Praktis dan Bergizi, sangat mudah dinikmati oleh anak²",
				"Siasat berkebun di lahan yang terbatas di depan rumah, jadi hijau dan asri!",
				"Berwisata di Taman Rekreasi Wiladatika saat pandemi dan sudah jenuh dirumah, tetap AMAN dan NYAMAN",
				"Panen apel sepuasnya di kebun orang! Bawa pulang lagi! wah, ternyata wisata petik apel di Kota Batu"];
	return title[videonum-1];			
}
function videoShortTitle(videonum){
	var title = ["Bubur Ayam Bumbu Rica",
				"Ikan Bawal Asam Manis Nanas",
				"Es Lidah Buaya Leci Lemon Stroberi",
				"Sayur Sop-sopan",
				"Tumis Sayur Oyong Telur dan Bihun Jagung",
				"Sop Ayam Fillet Cacana",
				"Siasat berkebun",
				"Berwisata di Taman Rekreasi Wiladatika",
				"Panen apel sepuasnya di kebun orang!"];
	return title[videonum-1];
}

function videoCode(videonum){
	var code = ["BBSQmNl4fRA",
				"63stAwX__zY",
				"qV-mev5rqrg",
				"UBRCMAsFaZ4",
				"cy6hJyk4r8Q",
				"HASZTilywhY",
				"dwbzq9-ftb4",
				"i3bWZ1czYiU",
				"eE-8B1u_yfc"];
	return code[videonum-1];
}
function videoCounts(){
	var code = ["BBSQmNl4fRA",
				"63stAwX__zY",
				"qV-mev5rqrg",
				"UBRCMAsFaZ4",
				"cy6hJyk4r8Q",
				"HASZTilywhY",
				"dwbzq9-ftb4",
				"i3bWZ1czYiU",
				"eE-8B1u_yfc"];
	return code.length;
}
function embedding(code){
	var embedLink = "<iframe width='560' height='315' src='https://www.youtube.com/embed/"+code+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	return embedLink;
}
function tanggalUpload(videonum){
	var tanggal = ["05/28/2020",
					"06/15/2020",
					"07/09/2020",
					"08/08/2020",
					"09/16/2020",
					"10/19/2020",
					"01/08/2021",
					"04/21/2021",
					"05/24/2021"];
	return tanggal[videonum-1];
}
function monthString(month){
	var monthList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
	"Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	return monthList[month];
}
function daysTotal(mauApa, month, year){
	var leap;
	if (year%4 != 0){leap = false;}
	else if ((year%100 == 0) && (year%400 != 0)){leap = false;}
	else {leap = true;}
	var daysInMonth;
	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
		daysInMonth = 31;
	} else if (month == 4 || month == 6 || month == 9 || month == 11){
		daysInMonth = 30;}
	else if ((month == 2) && (leap == true)){daysInMonth = 29;}
	else if ((month == 2) && (leap == false)){daysInMonth = 28;}
	if(mauApa == 1){return leap;}
	else if (mauApa == 2){return daysInMonth;}
}

function videoAge(diffYears, videonum){
	var diffMonth;
	var uploadYear = new Date(tanggalUpload(videonum));
	var fullYear = uploadYear.getFullYear();
	var month = (uploadYear.getMonth()+1);
	var daysInMonth = daysTotal(2, month, fullYear);
	var isLeap = daysTotal(1,month,fullYear);
	if (diffYears > 1){
		if (diffYears%12==0){
			diffYears = Math.floor(diffYears);
			document.write(" ("+diffYears+" tahun)");
		} else if (diffYears%12!=0){
			diffMonth = ((diffYears%12)*12)-12;
			diffYears = Math.floor(diffYears);
			diffMonth = Math.floor(diffMonth);
			if (diffMonth != 0){
				document.write(" ("+diffYears+" tahun "+diffMonth+" bulan)"); 
			} else if (diffMonth == 0){
				document.write(" ("+diffYears+" tahun)"); 
			}
			
		}
			
	} else if (diffYears < 1){
		diffMonth = diffYears*12;
		if (diffMonth%daysInMonth==0){
			document.write(" ("+diffMonth+" bulan)"); 
		} else if (diffMonth%daysInMonth!=0){
			diffDays = ((diffMonth%daysInMonth)*daysInMonth)-(daysInMonth*Math.floor(diffMonth));
			diffMonth = Math.floor(diffMonth);
			diffDays = Math.floor(diffDays);
			if (diffMonth < 1 &&(diffDays!=NaN)){
				document.write(" ("+diffDays+" hari)"); 
			} else if (diffMonth > 1 && (diffDays!=NaN || diffDays!=undefined)){
				document.write(" ("+diffMonth+" bulan "+diffDays+" hari)"); 
			} else if (diffMonth == 1 ||(diffDays == NaN || diffDays== undefined)){
				document.write(" ("+diffMonth+" bulan)");
			}
			
		}
		
	}
}
function getTodayDate(mauApa){
	var today = new Date();
	var date = today.getDate();
	var month = today.getMonth();
	var monthstring = monthString(month);
	var year = today.getFullYear();
	if (mauApa == 1){return date;}
	else if (mauApa == 2){return month;}
	else if (mauApa == 3){return monthstring;}
	else if (mauApa == 4){return year;}

}
