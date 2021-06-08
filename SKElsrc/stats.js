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
	function tH(column, month, year){
		var header = ["Video&darr;","Tanggal&rarr;"];
		var leap = daysTotal(1,month,year);
		var daysInMonth = daysTotal(2,month,year)+1;
		for (var i = 1; i < daysInMonth; i++){
			header.push(i+"/"+month);
		}
		if (column == 0){return header.length;}
		else {return header[column-1];}

	}
	function videoTitles(videonum){
		var videos = [/*1*/"Bubur Rica",
					/*2*/"Ikan Bawal",
					/*3*/"Lidah Buaya",
					/*4*/"Sop-sopan",
					/*5*/"Sayur Oyong",
					/*6*/"Cacana",
					/*7*/"Berkebun",
					/*8*/"Wiladatika",
					/*9*/"Apel Malang"];
		if (videonum == 0){return videos.length;}
		else {return videos[videonum-1];}

	}
	function videoLinks(videonum){
		var links = ["SKElVids/Bubur.html", "SKElVids/bawal.html", "SKElVids/lidahbuaya.html", "SKElVids/sopsopan.html", "SKElVids/oyong.html", "SKElVids/cacana.html", "SKElVids/berkebun.html", "SKElVids/wiladatika.html", "SKElVids/apel.html"];
		return links[videonum-1];
	}

	function monthSelector(month){
		var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
		if (month == 0){return months.length;}
		else {return months[month-1];}
	}
	function videoSelector (videonum, date, month, formatted,mauApa){
		var views;
		if (videonum == 1){
			views = bubur(date,month,mauApa);
		} else if (videonum == 2){
			views = bawal(date,month,mauApa);
		} else if (videonum == 3){
			views = lidahBuaya(date,month,mauApa);
		} else if (videonum == 4){
			views = sopSopan(date,month,mauApa);
		} else if (videonum == 5){
			views = oyong(date,month,mauApa);
		} else if (videonum == 6){
			views = cacana(date,month,mauApa);
		} else if (videonum == 7){
			views = berkebun(date,month,mauApa);
		} else if (videonum == 8){
			views = wiladatika(date,month,mauApa);
		} else if (videonum == 9){
			views = apel(date,month,mauApa);
		}
		if (formatted == false){return views;}
		else if (formatted == true){
			if (views == 0 || views == undefined || views == NaN){return "-";}
			else {
				var u = views;
				views = views.toString();
				var pattern;
	   			if (u < 1000000){
	   				pattern = /(-?\d+)(\d{3})/;
	   				while (pattern.test(views)){
	        		views = views.replace(pattern, "$1.$2");}
	   			}
				return views;
			}
		}
	}
	function bubur(date, month,mauApa){
		var viewsMay = [/*1*/4731,
						/*2*/4742, 
						/*3*/4752,
						/*4*/4764, 
						/*5*/4776, 
						/*6*/4785,
						/*7*/4793, 
						/*8*/4800, 
						/*9*/4809, 
						/*10*/4816, 
						/*11*/4827, 
						/*12*/4834, 
						/*13*/4844, 
						/*14*/4855, 
						/*15*/4865, 
						/*16*/4873, 
						/*17*/4882, 
						/*18*/4893, 
						/*19*/4903, 
						/*20*/4911, 
						/*21*/4922, 
						/*22*/4930, 
						/*23*/4937, 
						/*24*/4947, 
						/*25*/4955, 
						/*26*/4970,
						/*27*/4987,
						/*28*/5004,
						/*29*/5015,
						/*30*/5025,
						/*31*/5034];
		var viewsJune = [/*1*/5052,
						/*2*/5064,
						/*3*/5072,
						/*4*/5082,
						/*5*/5089,
						/*6*/5101,
						/*7*/5109,
						/*8*/5117];
		var viewsJuly = [];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
		else if (month == 7 && mauApa == 1){return viewsJuly[date-1];}
		else if(month == 7 && mauApa == 2){return viewsJuly[(viewsJune.length)-1];}
		else if(month == 7 && mauApa == 3){return viewsJuly[(viewsJune.length)-2];}
		else if(month == 7 && mauApa == 4){return viewsJuly[date-1];}
	}
	function bawal(date,month,mauApa){
		var viewsMay = [/*1*/4663,
						/*2*/4678, 
						/*3*/4693,
						/*4*/4719, 
						/*5*/4744, 
						/*6*/4767,
						/*7*/4785, 
						/*8*/4796, 
						/*9*/4817, 
						/*10*/4831, 
						/*11*/4846, 
						/*12*/4868, 
						/*13*/4886, 
						/*14*/4908, 
						/*15*/4923, 
						/*16*/4939, 
						/*17*/4955, 
						/*18*/4984, 
						/*19*/5009, 
						/*20*/5027, 
						/*21*/5045, 
						/*22*/5067, 
						/*23*/5092, 
						/*24*/5110, 
						/*25*/5135, 
						/*26*/5161,
						/*27*/5192,
						/*28*/5213,
						/*29*/5232,
						/*30*/5251,
						/*31*/5273];
		var viewsJune = [/*1*/5294,
						/*2*/5313,
						/*3*/5339,
						/*4*/5362,
						/*5*/5390,
						/*6*/5417,
						/*7*/5434,
						/*8*/5452
						];
		var viewsJuly = [];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
		else if (month == 7 && mauApa == 1){return viewsJuly[date-1];}
		else if(month == 7 && mauApa == 2){return viewsJuly[(viewsJune.length)-1];}
		else if(month == 7 && mauApa == 3){return viewsJuly[(viewsJune.length)-2];}
		else if(month == 7 && mauApa == 4){return viewsJuly[date-1];}
	}
	function lidahBuaya(date,month,mauApa){
		var viewsMay = [/*1*/3070,
						/*2*/3081, 
						/*3*/3092,
						/*4*/3104, 
						/*5*/3114, 
						/*6*/3120,
						/*7*/3128, 
						/*8*/3138, 
						/*9*/3146, 
						/*10*/3155, 
						/*11*/3165, 
						/*12*/3171, 
						/*13*/3177, 
						/*14*/3186, 
						/*15*/3194, 
						/*16*/3205, 
						/*17*/3211, 
						/*18*/3218, 
						/*19*/3227, 
						/*20*/3238, 
						/*21*/3251, 
						/*22*/3260, 
						/*23*/3267, 
						/*24*/3274, 
						/*25*/3283, 
						/*26*/3294,
						/*27*/3306,
						/*28*/3319,
						/*29*/3327,
						/*30*/3336,
						/*31*/3345];
		var viewsJune = [/*1*/3359,
						/*2*/3368,
						/*3*/3377,
						/*4*/3387,
						/*5*/3394,
						/*6*/3405,
						/*7*/3414,
						/*8*/3421
						];
		var viewsJuly = [];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
		else if (month == 7 && mauApa == 1){return viewsJuly[date-1];}
		else if(month == 7 && mauApa == 2){return viewsJuly[(viewsJune.length)-1];}
		else if(month == 7 && mauApa == 3){return viewsJuly[(viewsJune.length)-2];}
		else if(month == 7 && mauApa == 4){return viewsJuly[date-1];}
	}
	function sopSopan(date,month,mauApa){
		var viewsMay = [/*1*/3205,
						/*2*/3212, 
						/*3*/3223,
						/*4*/3235, 
						/*5*/3246, 
						/*6*/3261,
						/*7*/3273, 
						/*8*/3282, 
						/*9*/3292, 
						/*10*/3301, 
						/*11*/3313, 
						/*12*/3323, 
						/*13*/3331, 
						/*14*/3340, 
						/*15*/3349, 
						/*16*/3358, 
						/*17*/3369, 
						/*18*/3380, 
						/*19*/3389, 
						/*20*/3400, 
						/*21*/3411, 
						/*22*/3426, 
						/*23*/3435, 
						/*24*/3445, 
						/*25*/3457, 
						/*26*/3472,
						/*27*/3489,
						/*28*/3501,
						/*29*/3512,
						/*30*/3526,
						/*31*/3538];
		var viewsJune = [/*1*/3554,
						/*2*/3565,
						/*3*/3579,
						/*4*/3589,
						/*5*/3605,
						/*6*/3618,
						/*7*/3626,
						/*8*/3639,
						];
		var viewsJuly = [];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
		else if (month == 7 && mauApa == 1){return viewsJuly[date-1];}
		else if(month == 7 && mauApa == 2){return viewsJuly[(viewsJune.length)-1];}
		else if(month == 7 && mauApa == 3){return viewsJuly[(viewsJune.length)-2];}
		else if(month == 7 && mauApa == 4){return viewsJuly[date-1];}
	}
	function oyong(date,month,mauApa){
		var viewsMay = [/*1*/2573,
						/*2*/2585, 
						/*3*/2600,
						/*4*/2613, 
						/*5*/2629, 
						/*6*/2646,
						/*7*/2660, 
						/*8*/2672, 
						/*9*/2685, 
						/*10*/2694, 
						/*11*/2703, 
						/*12*/2715, 
						/*13*/2725, 
						/*14*/2737, 
						/*15*/2746, 
						/*16*/2757, 
						/*17*/2766, 
						/*18*/2775, 
						/*19*/2789, 
						/*20*/2799, 
						/*21*/2817, 
						/*22*/2838, 
						/*23*/2853, 
						/*24*/2864, 
						/*25*/2877, 
						/*26*/2889,
						/*27*/2904,
						/*28*/2915,
						/*29*/2923,
						/*30*/2935,
						/*31*/2946];
		var viewsJune = [/*1*/2966,
						/*2*/2977,
						/*3*/2988,
						/*4*/3000,
						/*5*/3017,
						/*6*/3034,
						/*7*/3047,
						/*8*/3059
						];
		var viewsJuly = [];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
		else if (month == 7 && mauApa == 1){return viewsJuly[date-1];}
		else if(month == 7 && mauApa == 2){return viewsJuly[(viewsJune.length)-1];}
		else if(month == 7 && mauApa == 3){return viewsJuly[(viewsJune.length)-2];}
		else if(month == 7 && mauApa == 4){return viewsJuly[date-1];}
	}
	function cacana(date,month,mauApa){
		var viewsMay = [/*1*/2141,
						/*2*/2148, 
						/*3*/2159,
						/*4*/2172, 
						/*5*/2182, 
						/*6*/2190,
						/*7*/2205, 
						/*8*/2211, 
						/*9*/2218, 
						/*10*/2228, 
						/*11*/2237, 
						/*12*/2246, 
						/*13*/2253, 
						/*14*/2263, 
						/*15*/2270, 
						/*16*/2281, 
						/*17*/2292, 
						/*18*/2302, 
						/*19*/2313, 
						/*20*/2325, 
						/*21*/2335, 
						/*22*/2344, 
						/*23*/2353, 
						/*24*/2363, 
						/*25*/2372, 
						/*26*/2387,
						/*27*/2395,
						/*28*/2406,
						/*29*/2413,
						/*30*/2423,
						/*31*/2433];
		var viewsJune = [/*1*/2443,
						/*2*/2456,
						/*3*/2466,
						/*4*/2475,
						/*5*/2483,
						/*6*/2497,
						/*7*/2508,
						/*8*/2516
						];				
		var viewsJuly = [];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
		else if (month == 7 && mauApa == 1){return viewsJuly[date-1];}
		else if(month == 7 && mauApa == 2){return viewsJuly[(viewsJune.length)-1];}
		else if(month == 7 && mauApa == 3){return viewsJuly[(viewsJune.length)-2];}
		else if(month == 7 && mauApa == 4){return viewsJuly[date-1];}
	}
	function berkebun(date,month,mauApa){
		var viewsMay = [/*1*/1245,
						/*2*/1252, 
						/*3*/1262,
						/*4*/1277, 
						/*5*/1288, 
						/*6*/1294,
						/*7*/1302, 
						/*8*/1310, 
						/*9*/1321, 
						/*10*/1330, 
						/*11*/1340, 
						/*12*/1346, 
						/*13*/1356, 
						/*14*/1368, 
						/*15*/1375, 
						/*16*/1381, 
						/*17*/1393, 
						/*18*/1403, 
						/*19*/1410, 
						/*20*/1418, 
						/*21*/1430, 
						/*22*/1441, 
						/*23*/1450, 
						/*24*/1459, 
						/*25*/1468, 
						/*26*/1483,
						/*27*/1498,
						/*28*/1515,
						/*29*/1527,
						/*30*/1537,
						/*31*/1547];
		var viewsJune = [/*1*/1564,
						/*2*/1581,
						/*3*/1594,
						/*4*/1607,
						/*5*/1617,
						/*6*/1632,
						/*7*/1641,
						/*8*/1654
						];				
		var viewsJuly = [];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
		else if (month == 7 && mauApa == 1){return viewsJuly[date-1];}
		else if(month == 7 && mauApa == 2){return viewsJuly[(viewsJune.length)-1];}
		else if(month == 7 && mauApa == 3){return viewsJuly[(viewsJune.length)-2];}
		else if(month == 7 && mauApa == 4){return viewsJuly[date-1];}
	}
	function wiladatika(date,month,mauApa){
		var viewsMay = [/*1*/195,
						/*2*/205, 
						/*3*/220,
						/*4*/233, 
						/*5*/243, 
						/*6*/253,
						/*7*/261, 
						/*8*/272, 
						/*9*/289, 
						/*10*/300, 
						/*11*/311, 
						/*12*/323, 
						/*13*/334, 
						/*14*/355, 
						/*15*/370, 
						/*16*/379, 
						/*17*/400, 
						/*18*/414, 
						/*19*/425, 
						/*20*/435, 
						/*21*/451, 
						/*22*/462, 
						/*23*/475, 
						/*24*/485, 
						/*25*/499, 
						/*26*/516,
						/*27*/533,
						/*28*/555,
						/*29*/571,
						/*30*/590,
						/*31*/603];
		var viewsJune = [/*1*/627,
						/*2*/644,
						/*3*/662,
						/*4*/679,
						/*5*/693,
						/*6*/711,
						/*7*/725,
						/*8*/741
						];
		var viewsJuly = [];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
		else if (month == 7 && mauApa == 1){return viewsJuly[date-1];}
		else if(month == 7 && mauApa == 2){return viewsJuly[(viewsJune.length)-1];}
		else if(month == 7 && mauApa == 3){return viewsJuly[(viewsJune.length)-2];}
		else if(month == 7 && mauApa == 4){return viewsJuly[date-1];}
	}
	function apel(date,month,mauApa){
		var viewsMay = [/*1*/0,
						/*2*/0, 
						/*3*/0,
						/*4*/0, 
						/*5*/0, 
						/*6*/0,
						/*7*/0, 
						/*8*/0, 
						/*9*/0, 
						/*10*/0, 
						/*11*/0, 
						/*12*/0, 
						/*13*/0, 
						/*14*/0, 
						/*15*/0, 
						/*16*/0, 
						/*17*/0, 
						/*18*/0, 
						/*19*/0, 
						/*20*/0, 
						/*21*/0, 
						/*22*/0, 
						/*23*/0, 
						/*24*/0, 
						/*25*/32, 
						/*26*/62,
						/*27*/87,
						/*28*/116,
						/*29*/137,
						/*30*/163,
						/*31*/190];
		var viewsJune = [/*1*/223,
						/*2*/241,
						/*3*/283,
						/*4*/309,
						/*5*/333,
						/*6*/376,
						/*7*/425,
						/*8*/476
						];
		var viewsJuly = [];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
		else if (month == 7 && mauApa == 1){return viewsJuly[date-1];}
		else if(month == 7 && mauApa == 2){return viewsJuly[(viewsJune.length)-1];}
		else if(month == 7 && mauApa == 3){return viewsJuly[(viewsJune.length)-2];}
		else if(month == 7 && mauApa == 4){return viewsJuly[date-1];}
	}

	function tableBuilder(date, month, year, videonum){
		var daysInMonth = (daysTotal(2,month,year)+2);
		var daysInMonth2 = (daysTotal(2,month,year)+1);
		var jumlahVideo = videoTitles(0);
		var mnth = tanggalan(5);
		var thistimeView, nextView, tanggalSelanjutnya, tanggalSebelumnya,  previousView, previousViewMonth, nextViewMonth;
		document.write("<h3>Bulan "+monthSelector(month)+"</h3>");
		document.write("<div class='tableWrapper'>")
		document.write("<table class='viewsData'>");
		document.write("<tr>");
		for (var column = 1; column <= daysInMonth; column++){
			document.write("<th>"+tH(column, month, year)+"</th>");
		}
		for (var vid = videonum; vid <= jumlahVideo; vid++){
			if (vid%2==0){
				document.write("<tr id='even' title='"+videoTitles(vid)+"'>");
			}else{
				document.write("<tr title='"+videoTitles(vid)+"'>");
			}
			document.write("<td class='judulVideo' colspan='2'>"+videoTitles(vid)+"</td>");
			for (var tanggal = date; tanggal < daysInMonth2; tanggal++){
				tanggalSelanjutnya = tanggal+1;
				tanggalSebelumnya = tanggal-1;
				if (tanggalSebelumnya < 1){
					previousViewMonth = month-1;
					tanggalSebelumnya = daysTotal(2,previousViewMonth,year);
				} else{
					previousViewMonth = month;
				}
				if (tanggalSelanjutnya > daysTotal(2,month,year)){
					nextViewMonth = month+1;
					tanggalSelanjutnya = 1;
				}else{
					nextViewMonth = month;
				}
				thistimeView = videoSelector(vid, tanggal, month, false, 1);
				nextView = videoSelector(vid,tanggalSelanjutnya,nextViewMonth, false, 1);
				previousView = videoSelector(vid,tanggalSebelumnya,[previousViewMonth], false, 1);
				if ((thistimeView == 0 && nextView!=thistimeView) && (nextView!=0||nextView!=undefined)){
					thistimeView = 0;
					document.write("<td id='entrance' class='numbersView'>");
					document.write(thistimeView);
					document.write("</td>");
				} else if (thistimeView != "-" && previousView>thistimeView && (previousView!=0 && previousView!=undefined && previousView!="-")){
					thistimeView = videoSelector(vid, tanggal, month, true, 1);
					document.write();
					document.write("<td id='lowerCount' class='numbersView'>");
					document.write(thistimeView);
					document.write("</td>");}
				 else{
				 	thistimeView = videoSelector(vid, tanggal, month, true, 1);
					document.write("<td class='numbersView'>");
					document.write(thistimeView);
					document.write("</td>");
				}
				
			}
			document.write("</tr>");
		}
		document.write("</tr>");
		document.write("</table>");
		document.write("</div>")
		
	}
	function lastUpdate(videonum, date, month){
		var today = videoSelector (videonum, date, month, false, 2);
		var year = tanggalan(4);
		var yesterday = videoSelector (videonum, date, month, false, 3);
		var yesterdayMonth;
		var isLeap = daysTotal(1,month,year);
		var yesterdayDaysinMonth;
		if (date == 1){
			yesterdayMonth = month-1;
			yesterdayDaysinMonth = daysTotal(2,yesterdayMonth,year);
			yesterday = videoSelector (videonum, yesterdayDaysinMonth, yesterdayMonth, false, 2);
		}
		var pertambahan = today - yesterday;
		return pertambahan;
	}
	function tanggalan(mauApa){
		var d = new Date;
		var days = ["Minggu","Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
		var gettingDay = d.getDay();
		var day = days[gettingDay];
		var date = d.getDate();
		var gettingMonth = d.getMonth();
		var month = monthSelector((gettingMonth+1));
		var year = d.getFullYear();
		if (mauApa==1){return day;}
		else if (mauApa==2){return date;}
		else if (mauApa==3){return month;}
		else if (mauApa==4){return year;}
		else if (mauApa==5){return (gettingMonth+1);}
	}
	function update_View(){
		var z = 1;
		var pertambahanAll=0;
		var q;
		var today = tanggalan(2);
		var thisMonth = (tanggalan(5));
		document.write("<div class='updateViews cf'>")
		for (var p = 1; p <= videoTitles(0); p++) {
			q = lastUpdate(p, today, thisMonth);
			var u = q.toString();
			u = u.toLocaleString("id-ID");
			if (p%2==0){
				document.write("<div class='bungkusTambahan even2'><a href='"+videoLinks(p)+"'>")
				document.write("<div id='tambahan'>"+u+"</div>");
				document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
				document.write("</a></div>")
			} else if (p%2!=0){
				document.write("<div class='bungkusTambahan'><a href='"+videoLinks(p)+"'>")
				document.write("<div id='tambahan'>"+u+"</div>");
				document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
				document.write("</a></div>")
			}
			pertambahanAll+=q;
			if (p%3==0 && p != videoTitles(0)){
				z++;
				document.write("</div>")
				document.write("<div class='updateViews cf'>");
			} else if ((p%3==0||p%3!=0) && p == videoTitles(0)){
				document.write("</div>");
			}
		}

		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+pertambahanAll+"</div>");
		document.write("<div id='judulVid'>Total</div>");
		document.write("</div>")
		var rataRataTambah = pertambahanAll/videoTitles(0);
		rataRataTambah=rataRataTambah.toFixed(2);
		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+rataRataTambah.toLocaleString('id-ID')+"</div>");
		document.write("<div id='judulVid'>Penambahan rata-rata</div>");
		document.write("</div>");
	}
	function update_View_Index(){
		var z = 1
		var pertambahanAll=0;
		var q, lastVid;
		lastVid = videoTitles(0);
		var today = tanggalan(2);
		var thisMonth = (tanggalan(5));
		document.write("<div class='updateViews cf'>")
		for (var p = (lastVid-8); p <= lastVid; p++) {
			q = lastUpdate(p, today, thisMonth);
			if (q == 0 || q == undefined || q == NaN){
				continue;
			} else{
				var u = q.toString();
				u = u.toLocaleString("id-ID");
				if (p%2==0){
					document.write("<div class='bungkusTambahan even2'><a href='"+videoLinks(p)+"'>")
					document.write("<div id='tambahan'>"+u+"</div>");
					document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
					document.write("</a></div>")
				} else if (p%2!=0){
					document.write("<div class='bungkusTambahan'><a href='"+videoLinks(p)+"'>")
					document.write("<div id='tambahan'>"+u+"</div>");
					document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
					document.write("</a></div>")
				}
				pertambahanAll+=q;
				if (p%3==0 && p != videoTitles(0)){
					z++;
					document.write("</div>")
					document.write("<div class='updateViews cf'>");
				} else if ((p%3==0||p%3!=0) && p == videoTitles(0)){
					document.write("</div>");
				}
			}
			
		}
		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+pertambahanAll+"</div>");
		document.write("<div id='judulVid'>Total</div>");
		document.write("</div>")
		var rataRataTambah = pertambahanAll/videoTitles(0);
		rataRataTambah=rataRataTambah.toFixed(2);
		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+rataRataTambah.toLocaleString('id-ID')+"</div>");
		document.write("<div id='judulVid'>Penambahan rata-rata</div>");
		document.write("</div>")
	}
	function monthlyUpdate(videonum, date, month){
		var today = videoSelector (videonum, date, month, false, 2);
		var firstDay = videoSelector (videonum, 1, month, false, 1);
		var pertambahan = today - firstDay;
		return pertambahan;
	}
	function monthlyProgress(){
		var pertambahanAll=0;
		var q;
		var today = tanggalan(2);
		var thisMonth = (tanggalan(5));
		var thisMonthWord = (tanggalan(3));
		var thisYear = (tanggalan(4));
		document.write("<h2 class='jarakin'> Penambahan selama bulan "+thisMonthWord+" "+thisYear+"</h2>");
		document.write("<div class='updateViews cf'>")
		for (var p = 1; p <= videoTitles(0); p++) {
			q = monthlyUpdate(p, today, thisMonth);
			if (p%2==0){
				document.write("<div class='bungkusTambahan'>")
				document.write("<div id='tambahan'>"+q+"</div>");
				document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
				document.write("</div>")
			} else if (p%2!=0){
				document.write("<div class='bungkusTambahan even2'>")
				document.write("<div id='tambahan'>"+q+"</div>");
				document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
				document.write("</div>")
			}
			
			pertambahanAll+=q;
			if (p%3==0 && p != videoTitles(0)){
				document.write("</div>")
				document.write("<div class='updateViews cf'>")
			} else if ((p%3==0||p%3!=0) && p == videoTitles(0)){
				document.write("</div>");
			}
		}

		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+pertambahanAll+"</div>");
		document.write("<div id='judulVid'>Total</div>");
		document.write("</div>");
		var rataRataTambah = pertambahanAll/videoTitles(0)
		rataRataTambah=rataRataTambah.toFixed(2);
		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+rataRataTambah+"</div>");
		document.write("<div id='judulVid'>Penambahan rata-rata</div>");
		document.write("</div>");
	}
