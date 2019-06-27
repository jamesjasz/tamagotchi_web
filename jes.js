var jam = 8;
var jamStr;
var harii=1;
var menit=0;
var target;
var jenis;

var jam2 = 0;
var menit2 = 0;
var detik2= 0;
var a=1;
var d;

var semester = 1;
var learnn = 10;	
var meal = 5;
var rfr= 5;
var rest = 5;

var waktuJam;
var MinesA;
var MinesB;
var MinesC;
var MinesD;
var NormalMd;


function hideee(){
	$("#pagedua").hide();
	$("#pagetiga").hide();
	$("#pageempat").hide();
	$("pagelima").hide();
	$("#pageenam").hide();
}

function mulai(){
	var satu = document.getElementById("pagesatu");
	satu.setAttribute("style", "display: none");
	var dua = document.getElementById("pagedua");
	dua.setAttribute("style", "display: inline-block");
	
	target = document.getElementsByTagName("img")[0];
	targetkiri = document.getElementById("kirs").getElementsByTagName("img")[0];
	targetkanan = document.getElementById("kans").getElementsByTagName("img")[0];
	targetkiri.setAttribute("style", "display: none")
	target.setAttribute("style", "display: inline-block");
	dNext = document.getElementById("kans");
	dNext.onclick = next;
	dPrev = document.getElementById("kirs");
	dPrev.onclick = prev;
	lima = document.getElementById("pagelima");
	lima.setAttribute("style", "display: none");
	
	
	cowok = document.getElementsByTagName("img")[0];
	cowok.onclick = charsatu;
	cewek = document.getElementsByTagName("img")[1];
	cewek.onclick = chardua;
	
	
}

function next(){
	targetkiri.setAttribute("style", "display: inline-block");
	targetkanan.setAttribute("style", "display: none");
	target.setAttribute("style", "display: none");
	target = target.nextSibling;
	target.setAttribute("style", "display: inline-block");
}

function prev(){
	targetkiri.setAttribute("style", "display: none");
	targetkanan.setAttribute("style", "display: inline-block");
	target.setAttribute("style", "display: none");
	target = target.previousSibling;
	target.setAttribute("style", "display: inline-block");
}

function mulaiGame(){
	var satu = document.getElementById("pagedua");
	satu.setAttribute("style", "display: none");
	$("#pagetiga").show();
	
	name = document.getElementById("nama").value;
	nama = document.getElementById("namakarakter").innerHTML = name;
	
	eat = document.getElementById("makan");
	eat.onclick = tmakan;
	
	hangoutt = document.getElementById("hangout");
	hangoutt.onclick = thangout;
	
	istirahat = document.getElementById("istirahat");
	istirahat.onclick = tistirahat;
	
	read = document.getElementById("baca");
	read.onclick = tbaca;
	
	kul = document.getElementById("kuliah");
	kul.onclick = tkuliah;
	
	disc = document.getElementById("diskusi");
	disc.onclick = tdiskusi;
	
	ya = document.getElementById("okay");
	ya.onclick = oke;
	
	no = document.getElementById("not");
	no.onclick = tidak;
	
	semesterr();
	jamWaktu();
	

	statusMines();
	statusMines2();
	statusMines3();
	statusMines4();
	ketStatus();
	normalMode1();
}	
	
function charsatu(){
	boy = '<img src="gambar/gambar2/simpson_1.png" />';
	document.getElementById("character").innerHTML = boy;
	jenis = 1;
	logo = '<img src="gambar/logo-cowok.png" />';
	document.getElementById("logo").innerHTML = logo;
}


function chardua(){
	girl = '<img src="gambar/gambar3/mirai_n.png" />';
	document.getElementById("character").innerHTML = girl;
	jenis = 2;
	logo = '<img src="gambar/logo-cewek.png" />';
	document.getElementById("logo").innerHTML = logo;
}

function normalMode1() {
	if(jenis==1){boy = '<img src="gambar/gambar2/simpson_1.png" />';
	document.getElementById("character").innerHTML = boy;}
	else if(jenis==2){girl = '<img src="gambar/gambar3/mirai_n.png" />';
	document.getElementById("character").innerHTML = girl;}
	
	normalMd = setTimeout(function(){normalMode1()}, 4000);
}


function jamWaktu() {
	jamStr = jam + ":" + menit;
	document.getElementById("jam").innerHTML = jamStr;
	menit++;
	body = document.getElementById("body");
	kuliah = document.getElementById("kuliah");
	
	if (menit >= 60) {
		jam += 1;
		menit = 0;
	}
	
	if (jam >= 24) {
		jam = 0;
		harii += 1;
	}
	
	if(jam == 15) {
		body.setAttribute("style","background:url('gambar/sore2	.jpg')");
	}
	
	if(jam == 19) {
		body.setAttribute("style","background:url('gambar/malam2.jpg')");
	}
	
	if(jam == 5) {
		body.setAttribute("style","background:url('gambar/siang3.jpg')");
	}
	
	if(harii == 1)harik = "Senin";
	else if(harii == 2)harik = "Selasa";
	else if(harii == 3)harik = "Rabu";
	else if(harii == 4)harik = "Kamis";
	else if(harii == 5)harik = "Jumat";
	else if(harii == 6)harik = "Sabtu";
	else if(harii == 7)harik = "Minggu";
	if(harii == 8) harii = 1;
	hari = harik;
	document.getElementById("hari").innerHTML = hari;
	

	if(harii == 6)kuliah.setAttribute("style", "display: none");
	if(harii == 7)kuliah.setAttribute("style", "display: none");
	if(harii == 1)kuliah.setAttribute("style", "display: inline-block");
	
	waktuJam = setTimeout(function(){jamWaktu()}, 20);
}

function jamWaktu2(){
	detik2 += a;
	
	if(detik2 <10) {
		detik2Text = ":0" +detik2;
	}
	else {
		detik2Text = ":" +detik2;
	}		
	
	if(detik2%60 == 0) {
		menit2+=1;
	}
	
	if (menit2 < 10) {
		menitText2 = ":0" + menit2;
	}
	else {
		menitText2 = ":" + menit2;
	}
	
	if (jam2 < 10) {
		jamText2 = "0" + jam2;
	}
	else {
		jamText2 = jam2;
	}
	
	if (menit2 >= 60) {
		menit2 = 0;
		jam2 += 1;
	}
	
	if(detik2 >= 60) {
		detik2 = 0;
	}
	
	waktumain = jamText2 + menitText2 +detik2Text;
	document.getElementById("waktuke2").innerHTML = "Play Time -> " + waktumain;
	time2 = setTimeout(function(){jamWaktu2()}, 1000);
}


function semesterr() {
	smst = semester;
	document.getElementById("semester-level").innerHTML = smst;
}

function statusMines() {
	kmakan();
	MinesA = setTimeout(function(){statusMines()}, 10000);
}

function statusMines2() {
	khangout();
	MinesB = setTimeout(function(){statusMines2()}, 12000);
}

function statusMines3() {
	kistirahat();
	MinesC = setTimeout(function(){statusMines3()}, 9000);
}

function statusMines4() {
	klearn();
	MinesD = setTimeout(function(){statusMines4()}, 12000);
}

function ketStatus() {
	if(meal == 1 && rest == 1 && rfr == 1){
		teststatus = "Died";
		document.getElementById("rasa").innerHTML = teststatus;
		die();
	}
	else if(meal>=11 && rest>=11 && rfr>=11){
		teststatus = "Happy";
		document.getElementById("rasa").innerHTML = teststatus;
	}
	else if(meal>=7 && rest>=7 && rfr>=7){
		teststatus = "Normal";
		document.getElementById("rasa").innerHTML = teststatus;
	}
	else if(meal <= 4){
		teststatus = "Hungry";
		document.getElementById("rasa").innerHTML = teststatus;
	}
	else if(rest <= 4){
		teststatus = "Sleepy";
		document.getElementById("rasa").innerHTML = teststatus;
	}
	else if(rfr <= 4){
		teststatus = "Bored";
		document.getElementById("rasa").innerHTML = teststatus;
	}
	
	setTimeout(function(){ketStatus()}, 1000);
}



function kmakan() {
	meal--;
	if(meal<=1)meal=1;
	if(meal==1)$("#meal-level").css({"width":"10px"}).css({"background-color":"#f8572c"});
	if(meal==2)$("#meal-level").css({"width":"20px"}).css({"background-color":"#ff7e45"});
	if(meal==3)$("#meal-level").css({"width":"30px"}).css({"background-color":"#ff7e45"});
	if(meal==4)$("#meal-level").css({"width":"40px"}).css({"background-color":"#fca667"});
	if(meal==5)$("#meal-level").css({"width":"50px"}).css({"background-color":"#fff057"});
	if(meal==6)$("#meal-level").css({"width":"60px"}).css({"background-color":"#fff057"});
	if(meal==7)$("#meal-level").css({"width":"70px"}).css({"background-color":"#fff057"});
	if(meal==8)$("#meal-level").css({"width":"80px"}).css({"background-color":"#d9ff57"});
	if(meal==9)$("#meal-level").css({"width":"90px"}).css({"background-color":"#d9ff57"});
	if(meal==10)$("#meal-level").css({"width":"100px"}).css({"background-color":"#d9ff57"});
	if(meal==11)$("#meal-level").css({"width":"110px"}).css({"background-color":"#d9ff57"});
	if(meal==12)$("#meal-level").css({"width":"120px"}).css({"background-color":"#a6ff57"});
	if(meal==13)$("#meal-level").css({"width":"130px"}).css({"background-color":"#a6ff57"});
	if(meal==14)$("#meal-level").css({"width":"140px"}).css({"background-color":"#a6ff57"});
	if(meal==15)$("#meal-level").css({"width":"150px"}).css({"background-color":"#a6ff57"});
}

function tmakan() {
	meal++;
	if(meal<=1)meal=1;
	if(meal==1)$("#meal-level").css({"width":"10px"}).css({"background-color":"#f8572c"});
	if(meal==2)$("#meal-level").css({"width":"20px"}).css({"background-color":"#fca667"});
	if(meal==3)$("#meal-level").css({"width":"30px"}).css({"background-color":"#fca667"});
	if(meal==4)$("#meal-level").css({"width":"40px"}).css({"background-color":"#fca667"});
	if(meal==5)$("#meal-level").css({"width":"50px"}).css({"background-color":"#fff057"});
	if(meal==6)$("#meal-level").css({"width":"60px"}).css({"background-color":"#fff057"});
	if(meal==7)$("#meal-level").css({"width":"70px"}).css({"background-color":"#fff057"});
	if(meal==8)$("#meal-level").css({"width":"80px"}).css({"background-color":"#d9ff57"});
	if(meal==9)$("#meal-level").css({"width":"90px"}).css({"background-color":"#d9ff57"});
	if(meal==10)$("#meal-level").css({"width":"100px"}).css({"background-color":"#d9ff57"});
	if(meal==11)$("#meal-level").css({"width":"110px"}).css({"background-color":"#d9ff57"});
	if(meal==12)$("#meal-level").css({"width":"120px"}).css({"background-color":"#a6ff57"});
	if(meal==13)$("#meal-level").css({"width":"130px"}).css({"background-color":"#a6ff57"});
	if(meal==14)$("#meal-level").css({"width":"140px"}).css({"background-color":"#a6ff57"});
	if(meal==15)$("#meal-level").css({"width":"150px"}).css({"background-color":"#a6ff57"});
	if(meal>15)meal=15;
	
	if(jenis==1){
		var htmlSisip = '<img src="gambar/gambar2/simpson_3.png"/>';
		document.getElementById("character").innerHTML = htmlSisip;
	}
	else if(jenis==2){
		var htmlSisip = '<img src="gambar/gambar3/mirai_5.png"/>';
		document.getElementById("character").innerHTML = htmlSisip;
	}
}

function khangout() {
	dmeal = document.getElementById("refresh-level");
	rfr--;
	if(rfr<=1)rfr = 1;
	if(rfr==1)$("#refresh-level").css({"width":"10px"}).css({"background-color":"#f8572c"});
	if(rfr==2)$("#refresh-level").css({"width":"20px"}).css({"background-color":"#ff7e45"});
	if(rfr==3)$("#refresh-level").css({"width":"30px"}).css({"background-color":"#ff7e45"});
	if(rfr==4)$("#refresh-level").css({"width":"40px"}).css({"background-color":"#fca667"});
	if(rfr==5)$("#refresh-level").css({"width":"50px"}).css({"background-color":"#fff057"});
	if(rfr==6)$("#refresh-level").css({"width":"60px"}).css({"background-color":"#fff057"});
	if(rfr==7)$("#refresh-level").css({"width":"70px"}).css({"background-color":"#fff057"});
	if(rfr==8)$("#refresh-level").css({"width":"80px"}).css({"background-color":"#d9ff57"});
	if(rfr==9)$("#refresh-level").css({"width":"90px"}).css({"background-color":"#d9ff57"});
	if(rfr==10)$("#refresh-level").css({"width":"100px"}).css({"background-color":"#d9ff57"});
	if(rfr==11)$("#refresh-level").css({"width":"110px"}).css({"background-color":"#d9ff57"});
	if(rfr==12)$("#refresh-level").css({"width":"120px"}).css({"background-color":"#a6ff57"});
	if(rfr==13)$("#refresh-level").css({"width":"130px"}).css({"background-color":"#a6ff57"});
	if(rfr==14)$("#refresh-level").css({"width":"140px"}).css({"background-color":"#a6ff57"});
	if(rfr==15)$("#refresh-level").css({"width":"150px"}).css({"background-color":"#a6ff57"});
}

function thangout() {
	rfr++;
	if(rfr==1)$("#refresh-level").css({"width":"10px"}).css({"background-color":"#f8572c"});
	if(rfr==2)$("#refresh-level").css({"width":"20px"}).css({"background-color":"#ff7e45"});
	if(rfr==3)$("#refresh-level").css({"width":"30px"}).css({"background-color":"#ff7e45"});
	if(rfr==4)$("#refresh-level").css({"width":"40px"}).css({"background-color":"#fca667"});
	if(rfr==5)$("#refresh-level").css({"width":"50px"}).css({"background-color":"#fff057"});
	if(rfr==6)$("#refresh-level").css({"width":"60px"}).css({"background-color":"#fff057"});
	if(rfr==7)$("#refresh-level").css({"width":"70px"}).css({"background-color":"#fff057"});
	if(rfr==8)$("#refresh-level").css({"width":"80px"}).css({"background-color":"#d9ff57"});
	if(rfr==9)$("#refresh-level").css({"width":"90px"}).css({"background-color":"#d9ff57"});
	if(rfr==10)$("#refresh-level").css({"width":"100px"}).css({"background-color":"#d9ff57"});
	if(rfr==11)$("#refresh-level").css({"width":"110px"}).css({"background-color":"#d9ff57"});
	if(rfr==12)$("#refresh-level").css({"width":"120px"}).css({"background-color":"#a6ff57"});
	if(rfr==13)$("#refresh-level").css({"width":"130px"}).css({"background-color":"#a6ff57"});
	if(rfr==14)$("#refresh-level").css({"width":"140px"}).css({"background-color":"#a6ff57"});
	if(rfr==15)$("#refresh-level").css({"width":"150px"}).css({"background-color":"#a6ff57"});
	if(rfr>15)rfr=15;
	
	if(jenis==1){
	var htmlSisip = '<img src="gambar/gambar2/simpson_2.gif"/>';
	document.getElementById("character").innerHTML = htmlSisip;
	}
	else if(jenis==2){
		var htmlSisip = '<img src="gambar/gambar3/mirai_6.png"/>';
		document.getElementById("character").innerHTML = htmlSisip;
	}
}

function kistirahat() {
	rest--;
	if(rest<=1)rest = 1;
	if(rest==1)$("#rest-level").css({"width":"10px"}).css({"background-color":"#f8572c"});
	if(rest==2)$("#rest-level").css({"width":"20px"}).css({"background-color":"#ff7e45"});
	if(rest==3)$("#rest-level").css({"width":"30px"}).css({"background-color":"#ff7e45"});
	if(rest==4)$("#rest-level").css({"width":"40px"}).css({"background-color":"#fca667"});
	if(rest==5)$("#rest-level").css({"width":"50px"}).css({"background-color":"#fff057"});
	if(rest==6)$("#rest-level").css({"width":"60px"}).css({"background-color":"#fff057"});
	if(rest==7)$("#rest-level").css({"width":"70px"}).css({"background-color":"#fff057"});
	if(rest==8)$("#rest-level").css({"width":"80px"}).css({"background-color":"#d9ff57"});
	if(rest==9)$("#rest-level").css({"width":"90px"}).css({"background-color":"#d9ff57"});
	if(rest==10)$("#rest-level").css({"width":"100px"}).css({"background-color":"#d9ff57"});
	if(rest==11)$("#rest-level").css({"width":"110px"}).css({"background-color":"#d9ff57"});
	if(rest==12)$("#rest-level").css({"width":"120px"}).css({"background-color":"#a6ff57"});
	if(rest==13)$("#rest-level").css({"width":"130px"}).css({"background-color":"#a6ff57"});
	if(rest==14)$("#rest-level").css({"width":"140px"}).css({"background-color":"#a6ff57"});
	if(rest==15)$("#rest-level").css({"width":"150px"}).css({"background-color":"#a6ff57"});
}

function tistirahat() {
	rest++;
	if(rest==1)$("#rest-level").css({"width":"10px"}).css({"background-color":"#f8572c"});
	if(rest==2)$("#rest-level").css({"width":"20px"}).css({"background-color":"#ff7e45"});
	if(rest==3)$("#rest-level").css({"width":"30px"}).css({"background-color":"#ff7e45"});
	if(rest==4)$("#rest-level").css({"width":"40px"}).css({"background-color":"#fca667"});
	if(rest==5)$("#rest-level").css({"width":"50px"}).css({"background-color":"#fff057"});
	if(rest==6)$("#rest-level").css({"width":"60px"}).css({"background-color":"#fff057"});
	if(rest==7)$("#rest-level").css({"width":"70px"}).css({"background-color":"#fff057"});
	if(rest==8)$("#rest-level").css({"width":"80px"}).css({"background-color":"#d9ff57"});
	if(rest==9)$("#rest-level").css({"width":"90px"}).css({"background-color":"#d9ff57"});
	if(rest==10)$("#rest-level").css({"width":"100px"}).css({"background-color":"#d9ff57"});
	if(rest==11)$("#rest-level").css({"width":"110px"}).css({"background-color":"#d9ff57"});
	if(rest==12)$("#rest-level").css({"width":"120px"}).css({"background-color":"#a6ff57"});
	if(rest==13)$("#rest-level").css({"width":"130px"}).css({"background-color":"#a6ff57"});
	if(rest==14)$("#rest-level").css({"width":"140px"}).css({"background-color":"#a6ff57"});
	if(rest==15)$("#rest-level").css({"width":"150px"}).css({"background-color":"#a6ff57"});
	if(rest>15)rest=15;
	
	if(jenis==1){
	var htmlSisip = '<img src="gambar/gambar2/simpson_4.png"/>';
	document.getElementById("character").innerHTML = htmlSisip;
	}
	else if(jenis==2){	
		var htmlSisip = '<img src="gambar/gambar3/mirai_4.png"/>';
		document.getElementById("character").innerHTML = htmlSisip;
	}
}

function tbaca() {
	dread = document.getElementById("learn-level");
	learnn+=4;
	if(learnn==1){dread.setAttribute("style","width:10px");}	
	else if(learnn==2){dread.setAttribute("style","width:20px");}
	else if(learnn==3){dread.setAttribute("style","width:30px");}
	else if(learnn==4){dread.setAttribute("style","width:40px");}
	else if(learnn==5){dread.setAttribute("style","width:50px");}
	else if(learnn==6){dread.setAttribute("style","width:60px");}
	else if(learnn==7){dread.setAttribute("style","width:70px");}
	else if(learnn==8){dread.setAttribute("style","width:80px");}
	else if(learnn==9){dread.setAttribute("style","width:90px");}
	else if(learnn==10){dread.setAttribute("style","width:100px");}
	else if(learnn==11){dread.setAttribute("style","width:110px");}
	else if(learnn==12){dread.setAttribute("style","width:120px");}
	else if(learnn==13){dread.setAttribute("style","width:130px");}
	else if(learnn==14){dread.setAttribute("style","width:140px");}
	else if(learnn==16){dread.setAttribute("style","width:160px");}
	else if(learnn==17){dread.setAttribute("style","width:170px");}
	else if(learnn==18){dread.setAttribute("style","width:180px");}
	else if(learnn==19){dread.setAttribute("style","width:190px");}
	else if(learnn==20){dread.setAttribute("style","width:200px");}
	else if(learnn==21){dread.setAttribute("style","width:210px");}
	else if(learnn==22){dread.setAttribute("style","width:220px");}
	else if(learnn==23){dread.setAttribute("style","width:230px");}
	else if(learnn==24){dread.setAttribute("style","width:240px");}
	else if(learnn==25){dread.setAttribute("style","width:250px");}
	else if(learnn==26){dread.setAttribute("style","width:260px");}
	else if(learnn==27){dread.setAttribute("style","width:270px");}
	else if(learnn==28){dread.setAttribute("style","width:280px");}
	else if(learnn==29){dread.setAttribute("style","width:290px");}
	else if(learnn==30){dread.setAttribute("style","width:300px");}
	else if(learnn==31){dread.setAttribute("style","width:310px");}
	else if(learnn==32){dread.setAttribute("style","width:320px");}
	else if(learnn==33){dread.setAttribute("style","width:330px");}
	else if(learnn==34){dread.setAttribute("style","width:340px");}
	else if(learnn==35){dread.setAttribute("style","width:350px");}
	else if(learnn==36){dread.setAttribute("style","width:360px");}
	else if(learnn==37){dread.setAttribute("style","width:370px");}
	else if(learnn==38){dread.setAttribute("style","width:380px");}
	else if(learnn==39){dread.setAttribute("style","width:390px");}
	else if(learnn==40){dread.setAttribute("style","width:400px");}
	else if(learnn==41){dread.setAttribute("style","width:410px");}
	else if(learnn==42){dread.setAttribute("style","width:420px");}
	else if(learnn==43){dread.setAttribute("style","width:430px");}
	else if(learnn==44){dread.setAttribute("style","width:440px");}
	else if(learnn==45){dread.setAttribute("style","width:450px");}
	else if(learnn==46){dread.setAttribute("style","width:460px");}
	else if(learnn==47){dread.setAttribute("style","width:470px");}
	else if(learnn==48){dread.setAttribute("style","width:480px");}
	else if(learnn==49){dread.setAttribute("style","width:490px");}
	else if(learnn==50){dread.setAttribute("style","width:500px");}
	else if(learnn==51){dread.setAttribute("style","width:510px");}
	else if(learnn==52){dread.setAttribute("style","width:520px");}
	else if(learnn==53){dread.setAttribute("style","width:530px");}
	else if(learnn==54){dread.setAttribute("style","width:540px");}
	else if(learnn==55){dread.setAttribute("style","width:550px");}
	
	
	if (learnn >= 55) {
		learnn = 5;
		semester += 1;
	}
	
	if(semester <= 1)semester = 1;
	
	if(semester > 8)lulus();
	
	smst = semester;
	document.getElementById("semester-level").innerHTML = smst;
	
	if(jenis==1){
	var htmlSisip = '<img src="gambar/gambar2/simpson_5.png"/>';
	document.getElementById("character").innerHTML = htmlSisip
	}
	else if(jenis==2){
		var htmlSisip = '<img src="gambar/gambar3/mirai_3.png"/>';
		document.getElementById("character").innerHTML = htmlSisip;
	}
}

function klearn() {
	dlearn = document.getElementById("learn-level");
	learnn-=2;
	if (learnn <= 1 && semester>1){
		learnn = 44;
		semester -= 1;
	}
	
	else if(learnn==2){dlearn.setAttribute("style","width:20px");}
	else if(learnn==3){dlearn.setAttribute("style","width:30px");}
	else if(learnn==4){dlearn.setAttribute("style","width:40px");}
	else if(learnn==5){dlearn.setAttribute("style","width:50px");}
	else if(learnn==6){dlearn.setAttribute("style","width:60px");}
	else if(learnn==7){dlearn.setAttribute("style","width:70px");}
	else if(learnn==8){dlearn.setAttribute("style","width:80px");}
	else if(learnn==9){dlearn.setAttribute("style","width:90px");}
	else if(learnn==10){dlearn.setAttribute("style","width:100px");}
	else if(learnn==11){dlearn.setAttribute("style","width:110px");}
	else if(learnn==12){dlearn.setAttribute("style","width:120px");}
	else if(learnn==13){dlearn.setAttribute("style","width:130px");}
	else if(learnn==14){dlearn.setAttribute("style","width:140px");}
	else if(learnn==16){dlearn.setAttribute("style","width:160px");}
	else if(learnn==17){dlearn.setAttribute("style","width:170px");}
	else if(learnn==18){dlearn.setAttribute("style","width:180px");}
	else if(learnn==19){dlearn.setAttribute("style","width:190px");}
	else if(learnn==20){dlearn.setAttribute("style","width:200px");}
	else if(learnn==21){dlearn.setAttribute("style","width:210px");}
	else if(learnn==22){dlearn.setAttribute("style","width:220px");}
	else if(learnn==23){dlearn.setAttribute("style","width:230px");}
	else if(learnn==24){dlearn.setAttribute("style","width:240px");}
	else if(learnn==25){dlearn.setAttribute("style","width:250px");}
	else if(learnn==26){dlearn.setAttribute("style","width:260px");}
	else if(learnn==27){dlearn.setAttribute("style","width:270px");}
	else if(learnn==28){dlearn.setAttribute("style","width:280px");}
	else if(learnn==29){dlearn.setAttribute("style","width:290px");}
	else if(learnn==30){dlearn.setAttribute("style","width:300px");}
	else if(learnn==31){dlearn.setAttribute("style","width:310px");}
	else if(learnn==32){dlearn.setAttribute("style","width:320px");}
	else if(learnn==33){dlearn.setAttribute("style","width:330px");}
	else if(learnn==34){dlearn.setAttribute("style","width:340px");}
	else if(learnn==35){dlearn.setAttribute("style","width:350px");}
	else if(learnn==36){dlearn.setAttribute("style","width:360px");}
	else if(learnn==37){dlearn.setAttribute("style","width:370px");}
	else if(learnn==38){dlearn.setAttribute("style","width:380px");}
	else if(learnn==39){dlearn.setAttribute("style","width:390px");}
	else if(learnn==40){dlearn.setAttribute("style","width:400px");}
	else if(learnn==41){dlearn.setAttribute("style","width:410px");}
	else if(learnn==42){dlearn.setAttribute("style","width:420px");}
	else if(learnn==43){dlearn.setAttribute("style","width:430px");}
	else if(learnn==44){dlearn.setAttribute("style","width:440px");}
	else if(learnn==45){dlearn.setAttribute("style","width:450px");}
	else if(learnn==46){dlearn.setAttribute("style","width:460px");}
	else if(learnn==47){dlearn.setAttribute("style","width:470px");}
	else if(learnn==48){dlearn.setAttribute("style","width:480px");}
	else if(learnn==49){dlearn.setAttribute("style","width:490px");}
	else if(learnn==50){dlearn.setAttribute("style","width:500px");}
	else if(learnn==51){dlearn.setAttribute("style","width:510px");}
	else if(learnn==52){dlearn.setAttribute("style","width:520px");}
	else if(learnn==53){dlearn.setAttribute("style","width:530px");}
	else if(learnn==54){dlearn.setAttribute("style","width:540px");}
	else if(learnn==55){dlearn.setAttribute("style","width:550px");}
	
	if(semester<=1) {
		semester = 1;
	}
	
	smst = semester;
	document.getElementById("semester-level").innerHTML = smst;
}

function tkuliah() {
	dread = document.getElementById("learn-level");
	learnn+=5;
	if(learnn==1){dread.setAttribute("style","width:10px");}	
	else if(learnn==2){dread.setAttribute("style","width:20px");}
	else if(learnn==3){dread.setAttribute("style","width:30px");}
	else if(learnn==4){dread.setAttribute("style","width:40px");}
	else if(learnn==5){dread.setAttribute("style","width:50px");}
	else if(learnn==6){dread.setAttribute("style","width:60px");}
	else if(learnn==7){dread.setAttribute("style","width:70px");}
	else if(learnn==8){dread.setAttribute("style","width:80px");}
	else if(learnn==9){dread.setAttribute("style","width:90px");}
	else if(learnn==10){dread.setAttribute("style","width:100px");}
	else if(learnn==11){dread.setAttribute("style","width:110px");}
	else if(learnn==12){dread.setAttribute("style","width:120px");}
	else if(learnn==13){dread.setAttribute("style","width:130px");}
	else if(learnn==14){dread.setAttribute("style","width:140px");}
	else if(learnn==16){dread.setAttribute("style","width:160px");}
	else if(learnn==17){dread.setAttribute("style","width:170px");}
	else if(learnn==18){dread.setAttribute("style","width:180px");}
	else if(learnn==19){dread.setAttribute("style","width:190px");}
	else if(learnn==20){dread.setAttribute("style","width:200px");}
	else if(learnn==21){dread.setAttribute("style","width:210px");}
	else if(learnn==22){dread.setAttribute("style","width:220px");}
	else if(learnn==23){dread.setAttribute("style","width:230px");}
	else if(learnn==24){dread.setAttribute("style","width:240px");}
	else if(learnn==25){dread.setAttribute("style","width:250px");}
	else if(learnn==26){dread.setAttribute("style","width:260px");}
	else if(learnn==27){dread.setAttribute("style","width:270px");}
	else if(learnn==28){dread.setAttribute("style","width:280px");}
	else if(learnn==29){dread.setAttribute("style","width:290px");}
	else if(learnn==30){dread.setAttribute("style","width:300px");}
	else if(learnn==31){dread.setAttribute("style","width:310px");}
	else if(learnn==32){dread.setAttribute("style","width:320px");}
	else if(learnn==33){dread.setAttribute("style","width:330px");}
	else if(learnn==34){dread.setAttribute("style","width:340px");}
	else if(learnn==35){dread.setAttribute("style","width:350px");}
	else if(learnn==36){dread.setAttribute("style","width:360px");}
	else if(learnn==37){dread.setAttribute("style","width:370px");}
	else if(learnn==38){dread.setAttribute("style","width:380px");}
	else if(learnn==39){dread.setAttribute("style","width:390px");}
	else if(learnn==40){dread.setAttribute("style","width:400px");}
	else if(learnn==41){dread.setAttribute("style","width:410px");}
	else if(learnn==42){dread.setAttribute("style","width:420px");}
	else if(learnn==43){dread.setAttribute("style","width:430px");}
	else if(learnn==44){dread.setAttribute("style","width:440px");}
	else if(learnn==46){dread.setAttribute("style","width:460px");}
	else if(learnn==47){dread.setAttribute("style","width:470px");}
	else if(learnn==48){dread.setAttribute("style","width:480px");}
	else if(learnn==49){dread.setAttribute("style","width:490px");}
	else if(learnn==50){dread.setAttribute("style","width:500px");}
	else if(learnn==51){dread.setAttribute("style","width:510px");}
	else if(learnn==52){dread.setAttribute("style","width:520px");}
	else if(learnn==53){dread.setAttribute("style","width:530px");}
	else if(learnn==54){dread.setAttribute("style","width:540px");}
	else if(learnn==55){dread.setAttribute("style","width:550px");}
	
	if (learnn >= 55) {
		learnn = 5;
		semester += 1;
		dread.setAttribute("style","width:10px");
	}
	
	if(semester > 8)lulus();
	
	smst = semester;
	document.getElementById("semester-level").innerHTML = smst;
	
	if(jenis==1){
	var htmlSisip = '<img src="gambar/gambar2/simpson_2.png"/>';
	document.getElementById("character").innerHTML = htmlSisip
	}
	else if(jenis==2){
		var htmlSisip = '<img src="gambar/gambar3/mirai_1.png"/>';
		document.getElementById("character").innerHTML = htmlSisip;
	}
}

function tdiskusi() {
	dread = document.getElementById("learn-level");
	learnn+=3;
	if(learnn==1){dread.setAttribute("style","width:10px");}	
	else if(learnn==2){dread.setAttribute("style","width:20px");}
	else if(learnn==3){dread.setAttribute("style","width:30px");}
	else if(learnn==4){dread.setAttribute("style","width:40px");}
	else if(learnn==5){dread.setAttribute("style","width:50px");}
	else if(learnn==6){dread.setAttribute("style","width:60px");}
	else if(learnn==7){dread.setAttribute("style","width:70px");}
	else if(learnn==8){dread.setAttribute("style","width:80px");}
	else if(learnn==9){dread.setAttribute("style","width:90px");}
	else if(learnn==10){dread.setAttribute("style","width:100px");}
	else if(learnn==11){dread.setAttribute("style","width:110px");}
	else if(learnn==12){dread.setAttribute("style","width:120px");}
	else if(learnn==13){dread.setAttribute("style","width:130px");}
	else if(learnn==14){dread.setAttribute("style","width:140px");}
	else if(learnn==16){dread.setAttribute("style","width:160px");}
	else if(learnn==17){dread.setAttribute("style","width:170px");}
	else if(learnn==18){dread.setAttribute("style","width:180px");}
	else if(learnn==19){dread.setAttribute("style","width:190px");}
	else if(learnn==20){dread.setAttribute("style","width:200px");}
	else if(learnn==21){dread.setAttribute("style","width:210px");}
	else if(learnn==22){dread.setAttribute("style","width:220px");}
	else if(learnn==23){dread.setAttribute("style","width:230px");}
	else if(learnn==24){dread.setAttribute("style","width:240px");}
	else if(learnn==25){dread.setAttribute("style","width:250px");}
	else if(learnn==26){dread.setAttribute("style","width:260px");}
	else if(learnn==27){dread.setAttribute("style","width:270px");}
	else if(learnn==28){dread.setAttribute("style","width:280px");}
	else if(learnn==29){dread.setAttribute("style","width:290px");}
	else if(learnn==30){dread.setAttribute("style","width:300px");}
	else if(learnn==31){dread.setAttribute("style","width:310px");}
	else if(learnn==32){dread.setAttribute("style","width:320px");}
	else if(learnn==33){dread.setAttribute("style","width:330px");}
	else if(learnn==34){dread.setAttribute("style","width:340px");}
	else if(learnn==35){dread.setAttribute("style","width:350px");}
	else if(learnn==36){dread.setAttribute("style","width:360px");}
	else if(learnn==37){dread.setAttribute("style","width:370px");}
	else if(learnn==38){dread.setAttribute("style","width:380px");}
	else if(learnn==39){dread.setAttribute("style","width:390px");}
	else if(learnn==40){dread.setAttribute("style","width:400px");}
	else if(learnn==41){dread.setAttribute("style","width:410px");}
	else if(learnn==42){dread.setAttribute("style","width:420px");}
	else if(learnn==43){dread.setAttribute("style","width:430px");}
	else if(learnn==44){dread.setAttribute("style","width:440px");}
	else if(learnn==46){dread.setAttribute("style","width:460px");}
	else if(learnn==47){dread.setAttribute("style","width:470px");}
	else if(learnn==48){dread.setAttribute("style","width:480px");}
	else if(learnn==49){dread.setAttribute("style","width:490px");}
	else if(learnn==50){dread.setAttribute("style","width:500px");}
	else if(learnn==51){dread.setAttribute("style","width:510px");}
	else if(learnn==52){dread.setAttribute("style","width:520px");}
	else if(learnn==53){dread.setAttribute("style","width:530px");}
	else if(learnn==54){dread.setAttribute("style","width:540px");}
	else if(learnn==55){dread.setAttribute("style","width:550px");}
	
	if (learnn >= 55) {
		learnn = 5;
		semester += 1;
		dread.setAttribute("style","width:10px");
	}
	
	if(semester > 8)lulus();

	smst = semester;
	document.getElementById("semester-level").innerHTML = smst;
	
	if(jenis==1){
	var htmlSisip = '<img src="gambar/gambar2/simpson_6.png"/>';
	document.getElementById("character").innerHTML = htmlSisip
	}
	else if(jenis==2){
		var htmlSisip = '<img src="gambar/gambar3/mirai_0.png"/>';
		document.getElementById("character").innerHTML = htmlSisip;
	}
}



function lulus(){
	satu = document.getElementById("pageempat");
	satu.setAttribute("style", "display: inline-block");
	dua = document.getElementById("pagetiga");
	dua.setAttribute("style", "display: none");
	tiga = document.getElementById("pagelima");
	tiga.setAttribute("style", "display: none");
	
	if(jenis == 1){
		htmlSisip = '<img src="gambar/gambar2/lulus_cowok.png" />';
		document.getElementById("lulus_c").innerHTML = htmlSisip;
	}
	
	else if(jenis == 2){
		htmlSisip = '<img src="gambar/gambar3/lulus_cewek.png" />';
		document.getElementById("lulus_c").innerHTML = htmlSisip;
	}
	
	clearTimeout(waktuJam);
	clearTimeout(MinesA);
	clearTimeout(MinesB);
	clearTimeout(MinesC);
	clearTimeout(MinesD);
	clearTimeout(normalMd);
	
}

function die() {
	satu = document.getElementById("pagelima");
	satu.setAttribute("style", "display: inline-block");
	dua = document.getElementById("pagetiga");
	dua.setAttribute("style", "display: none");
	clearTimeout(waktuJam);
	clearTimeout(MinesA);
	clearTimeout(MinesB);
	clearTimeout(MinesC);
	clearTimeout(MinesD);
	clearTimeout(normalMd);
	jam = 21;
	harii = 1;
	learnn = 10;
	meal = 5;
	semester = 1;
	rfr = 5;
	rest = 5;
	body = document.getElementById("body");
	body.setAttribute("style","background:url('gambar/malam2.jpg')");
}

function oke() {
	$("#pagelima").hide();
	mulaiGame();
}

function tidak() {
	satu = document.getElementById("pagelima").getElementsByTagName("input")[0];
	satu.setAttribute("style", "display: none");
	dua = document.getElementById("pagelima").getElementsByTagName("input")[1];
	dua.setAttribute("style", "display: none");
	tiga = document.getElementById("pagelima").getElementsByTagName("h1")[0];
	tiga.setAttribute("style", "dsiplay: none");
}


function klik() {
	document.getElementById("startgame").addEventListener("click", mulaiGame, false);
	document.getElementById("mulaiss").addEventListener("click", mulai,false);
}

window.addEventListener("load", klik, false);
window.addEventListener("load", hideee, false);
window.onload = jamWaktu2;
