function daysTotal(mauApa,month,year){
	var leap, daysInMonth;
	if(year%4!=0){leap=false;}
	else if ((year%100==0)&&(year%400!=0)){leap=false;}
	else{leap=true;}
	if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){daysInMonth=31;}
	else if(month==4||month==6||month==9||month==11){daysInMonth=30;}
	else if((month==2)&&(leap==true)){daysInMonth=29;}
	else if((month==2)&&(leap==false)){daysInMonth=28;}
	if(mauApa==1){return leap;}
	else if(mauApa==2){return daysInMonth;}
}
function tH(column,month,year){
	var header=["Video&darr;","Tanggal&rarr;"];
	var leap=daysTotal(1,month,year);
	var daysInMonth=daysTotal(2,month,year)+1;
	for(var i=1;i<daysInMonth;i++){header.push(i+"/"+month);}
	if(column==0){return header.length;}
	else{return header[column-1];}
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
			/*9*/"Apel Malang",
		     /*10*/"Jeruk Medan"];
	if (videonum == 0){return videos.length;}
	else {return videos[videonum-1];}
}
function videoLinks(videonum){
	var links=["SKElVids/Bubur.html","SKElVids/bawal.html", "SKElVids/lidahbuaya.html","SKElVids/sopsopan.html","SKElVids/oyong.html","SKElVids/cacana.html","SKElVids/berkebun.html","SKElVids/wiladatika.html","SKElVids/apel.html","SKElVids/jeruk-medan.html"];
	return links[videonum-1];
}
function monthSelector(month){
	var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	if (month == 0){return months.length;}
	else {return months[month-1];}
}
function videoSelector (videonum,date,month,year,formatted,mauApa){
	var views;
	if(videonum==1){views=bubur(date,month,year,mauApa);}
	else if(videonum==2){views=bawal(date,month,year,mauApa);}
	else if(videonum==3){views=lidahBuaya(date,month,year,mauApa);}
	else if(videonum==4){views=sopSopan(date,month,year,mauApa);}
	else if(videonum==5){views=oyong(date,month,year,mauApa);}
	else if(videonum==6){views=cacana(date,month,year,mauApa);}
	else if(videonum==7){views=berkebun(date,month,year,mauApa);}
	else if(videonum==8){views=wiladatika(date,month,year,mauApa);}
	else if(videonum==9){views=apel(date,month,year,mauApa);}
	else if(videonum==10){views=jeruk(date,month,year,mauApa);}
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
function bubur(date,month,year,mauApa){
	var viewsMay = [4731,4742,4752,4764,4776,4785,4793,4800,4809,4816,4827,4834,4844,4855,4865,4873,4882,4893,4903,4911,4922,4930,4937,4947,4955,4970,4987,5004,5015,5025,5034];
	var viewsJune = [5052,5064,5072,5082,5089,5101,5109,5117,5125,5134,5143,5154,5161,5172,5178,5185,5199,5206,5211,5220,5235,5242,5250,5263,5273,5281,5290,5298,5306];
	var viewsJuly = [];
	var viewsAugust = [];
	if (year == 2021){
		if (month == 0){return viewsMay.length;}
		else if(month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if(month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
		else if(month == 7 && mauApa == 1){return viewsJuly[date-1];}
		else if(month == 7 && mauApa == 2){return viewsJuly[(viewsJune.length)-1];}
		else if(month == 7 && mauApa == 3){return viewsJuly[(viewsJune.length)-2];}
		else if(month == 7 && mauApa == 4){return viewsJuly[date-1];}
		else if(month == 8 && mauApa == 1){return viewsAugust[date-1];}
		else if(month == 8 && mauApa == 2){return viewsAugust[(viewsJune.length)-1];}
		else if(month == 8 && mauApa == 3){return viewsAugust[(viewsJune.length)-2];}
		else if(month == 8 && mauApa == 4){return viewsAugust[date-1];}
	}
}
function bawal(date,month,year,mauApa){
	var viewsMay = [4663,4678, 4693,4719,4744,4767,4785,4796,4817,4831,4846,4868,4886,4908,4923,4939,4955,4984,5009,5027,5045,5067,5092,5110,5135,5161,5192,5213,5232,5251,5273];
	var viewsJune = [5294,5313,5339,5362,5390,5417,5434,5452,5477,5491,5511,5532,5546,5571,5594,5616,5646,5667,5682,5701,5728,5753,5769,5792,5824,5842,5861,5873,5888];
	var viewsJuly = [];
	var viewsAugust = [];
	if (year == 2021){
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
		else if (month == 8 && mauApa == 1){return viewsAugust[date-1];}
		else if(month == 8 && mauApa == 2){return viewsAugust[(viewsJune.length)-1];}
		else if(month == 8 && mauApa == 3){return viewsAugust[(viewsJune.length)-2];}
		else if(month == 8 && mauApa == 4){return viewsAugust[date-1];}
	}
}
function lidahBuaya(date,month,year,mauApa){
	var viewsMay = [3070,3081,3092,3104,3114,3120,3128,3138,3146,3155,3165,3171,3177,3186,3194,3205,3211,3218,3227,3238,3251,3260,3267,3274,3283,3294,3306,3319,3327,3336,3345];
	var viewsJune = [3359,3368,3377,3387,3394,3405,3414,3421,3429,3436,3441,3453,3465,3473,3479,3487,3494,3501,3507,3516,3525,3533,3541,3552,3563,3569,3579,3587,3598];
	var viewsJuly = [];
	var viewsAugust = [];
	if (year == 2021){
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
		else if (month == 8 && mauApa == 1){return viewsAugust[date-1];}
		else if(month == 8 && mauApa == 2){return viewsAugust[(viewsJune.length)-1];}
		else if(month == 8 && mauApa == 3){return viewsAugust[(viewsJune.length)-2];}
		else if(month == 8 && mauApa == 4){return viewsAugust[date-1];}
	}
}
function sopSopan(date,month,year,mauApa){
	var viewsMay = [3205,3212,3223,3235,3246,3261,3273,3282,3292,3301,3313,3323,3331,3340,3349,3358,3369,3380,3389,3400,3411,3426,3435,3445,3457,3472,3489,3501,3512,3526,3538];
	var viewsJune = [3554,3565,3579,3589,3605,3618,3626,3639,3649,3659,3668,3679,3692,3701,3712,3722,3731,3739,3745,3754,3764,3774,3780,3791,3803,3812,3823,3833,3843];
	var viewsJuly = [];
	var viewsAugust = [];
	if (year == 2021){
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
		else if (month == 8 && mauApa == 1){return viewsAugust[date-1];}
		else if(month == 8 && mauApa == 2){return viewsAugust[(viewsJune.length)-1];}
		else if(month == 8 && mauApa == 3){return viewsAugust[(viewsJune.length)-2];}
		else if(month == 8 && mauApa == 4){return viewsAugust[date-1];}
	}
}
function oyong(date,month,year,mauApa){
	var viewsMay = [2573,2585,2600,2613,2629,2646,2660,2672,2685,2694,2703,2715,2725,2737,2746,2757,2766,2775,2789,2799,2817,2838,2853,2864,2877, 2889,2904,2915,2923,2935,2946];
	var viewsJune = [2966,2977,2988,3000,3017,3034,3047,3059,3074,3085,3095,3107,3119,3131,3138,3148,3167,3176,3187,3198,3214,3228,3238,3252,3265,3274,3291,3304,3319];
	var viewsJuly = [];
	var viewsAugust = [];
	if (year == 2021){
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
		else if (month == 8 && mauApa == 1){return viewsAugust[date-1];}
		else if(month == 8 && mauApa == 2){return viewsAugust[(viewsJune.length)-1];}
		else if(month == 8 && mauApa == 3){return viewsAugust[(viewsJune.length)-2];}
		else if(month == 8 && mauApa == 4){return viewsAugust[date-1];}
	}
}
function cacana(date,month,year,mauApa){
	var viewsMay = [2141,2148,2159,2172,2182,2190,2205,2211,2218,2228,2237,2246,2253,2263,2270,2281,2292,2302,2313,2325,2335,2344,2353,2363,2372,2387,2395,2406,2413,2423,2433];
	var viewsJune = [2443,2456,2466,2475,2483,2497,2508,2516,2525,2536,2542,2552,2562,2570,2577,2591,2604,2615,2624,2635,2648,2658,2666,2683,2695,2705,2715,2727,2736];				
	var viewsJuly = [];
	var viewsAugust = [];
	if (year == 2021){
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
		else if (month == 8 && mauApa == 1){return viewsAugust[date-1];}
		else if(month == 8 && mauApa == 2){return viewsAugust[(viewsJune.length)-1];}
		else if(month == 8 && mauApa == 3){return viewsAugust[(viewsJune.length)-2];}
		else if(month == 8 && mauApa == 4){return viewsAugust[date-1];}
	}
}
function berkebun(date,month,year,mauApa){
	var viewsMay = [1245,1252,1262,1277,1288,1294,1302,1310,1321,1330,1340,1346,1356,1368,1375,1381,1393,1403,1410,1418,1430,1441,1450,1459,1468,1483,1498,1515,1527,1537,1547];
	var viewsJune = [1564,1581,1594,1607,1617,1632,1641,1654,1663,1675,1683,1692,1700,1708,1715,1729,1743,1754,1762,1774,1788,1796,1805,1821,1833,1845,1857,1870,1888];				
	var viewsJuly = [];
	var viewsAugust = [];
	if (year == 2021){
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
		else if (month == 8 && mauApa == 1){return viewsAugust[date-1];}
		else if(month == 8 && mauApa == 2){return viewsAugust[(viewsJune.length)-1];}
		else if(month == 8 && mauApa == 3){return viewsAugust[(viewsJune.length)-2];}
		else if(month == 8 && mauApa == 4){return viewsAugust[date-1];}
	}
}
function wiladatika(date,month,year,mauApa){
	var viewsMay = [195,205,220,233,243,253,261,272,289,300,311,323,334,355,370,379,400,414,425,435,451,462,475,485,499,516,533,555,571,590,603];
	var viewsJune = [627,644,662,679,693,711,725,741,754,767,779,791,808,824,835,849,867,886,903,930,960,1025,1061,1086,1113,1149,1170,1203,1242];
	var viewsJuly = [];
	var viewsAugust = [];
	if (year == 2021){
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
		else if (month == 8 && mauApa == 1){return viewsAugust[date-1];}
		else if(month == 8 && mauApa == 2){return viewsAugust[(viewsJune.length)-1];}
		else if(month == 8 && mauApa == 3){return viewsAugust[(viewsJune.length)-2];}
		else if(month == 8 && mauApa == 4){return viewsAugust[date-1];}
	}
}
function apel(date,month,year,mauApa){
	var viewsMay = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,62,87,116,137,163,190];
	var viewsJune = [223,241,283,309,333,376,425,476,541,582,639,682,738,798,838,908,1046,1126,1195,1343,1453,1578,1699,1841,1951,2070,2250,2418,2532]
	var viewsJuly = [];
	var viewsAugust = [];
	if (year == 2021){
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
		else if (month == 8 && mauApa == 1){return viewsAugust[date-1];}
		else if(month == 8 && mauApa == 2){return viewsAugust[(viewsJune.length)-1];}
		else if(month == 8 && mauApa == 3){return viewsAugust[(viewsJune.length)-2];}
		else if(month == 8 && mauApa == 4){return viewsAugust[date-1];}
	}
}
function jeruk(date,month,year,mauApa){
	//var viewsMay = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,62,87,116,137,163,190];
	var viewsJune = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var viewsJuly = [];
	var viewsAugust = [];
	if (year == 2021){
		if (month == 0){return viewsMay.length;}
		else if(month==6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
		else if(month == 7 && mauApa == 1){return viewsJuly[date-1];}
		else if(month == 7 && mauApa == 2){return viewsJuly[(viewsJune.length)-1];}
		else if(month == 7 && mauApa == 3){return viewsJuly[(viewsJune.length)-2];}
		else if(month == 7 && mauApa == 4){return viewsJuly[date-1];}
		else if(month == 8 && mauApa == 1){return viewsAugust[date-1];}
		else if(month == 8 && mauApa == 2){return viewsAugust[(viewsJune.length)-1];}
		else if(month == 8 && mauApa == 3){return viewsAugust[(viewsJune.length)-2];}
		else if(month == 8 && mauApa == 4){return viewsAugust[date-1];}
	}
}
function tableBuilder(date, month, year, videonum){
	var daysInMonth = (daysTotal(2,month,year)+2);
	var daysInMonth2 = (daysTotal(2,month,year)+1);
	var jumlahVideo = videoTitles(0);
	var mnth = tanggalan(5);
	var todayDate = tanggalan(2);
	var thistimeView,r, s, nextView, tanggalSelanjutnya, tanggalSebelumnya, previousView, previousViewMonth, nextViewMonth, previousViewYear, nextViewYear;
	document.write("<div class='inH'><h3>Bulan "+monthSelector(month)+"</h3></div>");
	document.write("<div class='tableWrapper'>")
	document.write("<table class='viewsData'>");
	document.write("<tr>");
	if (month == mnth){
		s = new Date();
		s = s.getDate()+1;
		r = s+1;
	} else{
		r = daysInMonth;
		s = daysInMonth2;
	}
	for (var column=1; column <= r; column++){document.write("<th>"+tH(column, month, year)+"</th>");}
	for (var vid = videonum; vid <= jumlahVideo; vid++){
		if (vid%2==0){document.write("<tr id='even' title='"+videoTitles(vid)+"'>");}
		else{document.write("<tr title='"+videoTitles(vid)+"'>");}
		document.write("<td class='judulVideo' colspan='2'>"+videoTitles(vid)+"</td>");
		for (var tanggal = date; tanggal < s; tanggal++){
			tanggalSelanjutnya = tanggal+1;
			tanggalSebelumnya = tanggal-1;
			if (tanggalSebelumnya < 1){
				previousViewMonth = month-1;
				tanggalSebelumnya = daysTotal(2,previousViewMonth,year);
			} else{previousViewMonth = month;}
			if (tanggalSelanjutnya > daysTotal(2,month,year)){
				nextViewMonth = month+1;
				tanggalSelanjutnya = 1;
			}else{nextViewMonth = month;}
			if (previousViewMonth<1){previousViewYear = year-1;}
			else{previousViewYear = year;}
			if (nextViewMonth > 12){nextViewYear = year+1;}
			else {nextViewYear=year;}
			thistimeView = videoSelector(vid, tanggal, month, year, false, 1);
			nextView = videoSelector(vid,tanggalSelanjutnya,nextViewMonth,nextViewYear, false, 1);
			previousView = videoSelector(vid,tanggalSebelumnya,previousViewMonth,previousViewYear, false, 1);
			if ((thistimeView == 0 && nextView!=thistimeView) && (nextView!=0||nextView!=undefined)){
				thistimeView = 0;
				document.write("<td id='entrance' class='numbersView'>");
				document.write(thistimeView);
				document.write("</td>");
			} else if (thistimeView != 0 && previousView>thistimeView && (previousView!=0 && previousView!=undefined && previousView!="-")){
				thistimeView = videoSelector(vid, tanggal, month, year, true, 1);
				document.write();
				document.write("<td id='lowerCount' class='numbersView'>");
				document.write(thistimeView);
				document.write("</td>");}
			 else{
			 	thistimeView = videoSelector(vid, tanggal, month, year, true, 1);
				document.write("<td class='numbersView'>");
				document.write(thistimeView);
				document.write("</td>");
			}
		}
		document.write("</tr>");
	}
	document.write("</tr>");
	document.write("</table>");
	document.write("</div>");
}
function lastUpdate(videonum, date, month, year){
	var today = videoSelector(videonum, date, month, year, false, 2);
	var yesterday = videoSelector(videonum, date, month, year, false, 3);
	var yesterdayMonth, yesterdayYear;
	var isLeap = daysTotal(1,month,year);
	var yesterdayDaysinMonth;
	if (date == 1){
		yesterdayMonth = month-1;
		yesterdayDaysinMonth = daysTotal(2,yesterdayMonth,year);
		if (month == 1){
			yesterdayYear = year-1;
			yesterday = videoSelector (videonum, yesterdayDaysinMonth, yesterdayMonth, yesterdayYear, false, 2);
		} else{
			yesterday = videoSelector (videonum, yesterdayDaysinMonth, yesterdayMonth, year, false, 2);
		}
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
	var year = tanggalan(4);
	document.write("<div class='updateViews cf'>");
	for (var p = 1; p <= videoTitles(0); p++){
		q = lastUpdate(p, today, thisMonth, year);
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
	var z = 1;
	var pertambahanAll=0;
	var q, lastVid;
	var year = tanggalan(4);
	lastVid = videoTitles(0);
	var today = tanggalan(2);
	var thisMonth = (tanggalan(5));
	document.write("<div class='updateViews cf'>");
	if (lastVid < 9){d = lastVid-(lastVid-1);}
	else if (lastVid >= 9){d = lastVid-8;}
	for (var p = d; p <= lastVid+1; p++){
		console.log("p = "+p);
		q = lastUpdate(p, today, thisMonth, year);
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
function monthlyUpdate(videonum, date, month, year){
	var today = videoSelector (videonum, date, month, year, false, 2);
	var firstDay = videoSelector (videonum, 1, month, year, false, 1);
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
		q = monthlyUpdate(p, today, thisMonth, thisYear);
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
