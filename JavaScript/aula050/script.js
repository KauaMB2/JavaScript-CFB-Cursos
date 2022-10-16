var textIn=new Array();
var textOut=new Array();
var textFinal=new Array();
var sizeText;
var world;
var obj1;
var obj2;
var obj3;
var triesLimit;
var triesCounter;
var updateInfo;
var counter=0;
function toPlay(){
	world=obj2.value;
	obj2.value="";
	for(var i=0;i<textIn.length;i++){
		if(world==textIn[i]){
			textOut[i]=world;
			obj1.innerHTML=textOut;
		}
	}
	for(var i=0;i<textOut.length;i++){
		if(world==textOut[i]){
			counter++;
		}
	}
	if(triesCounter==triesLimit){
		alert("VOCÊ PERDEU, BURRO!!!!")
	}
	if(counter==sizeText){
		alert("VOCÊ GANHOU!!");
	}
	triesCounter++;
	updateInfo="Número de palavras: "+sizeText+"<br>Limite de tentativas: "+triesLimit+"<br>Tentativas: "+triesCounter;
	obj3.innerHTML=updateInfo;
	console.log(counter+"\n"+textOut);
}
function toStart(){
	obj1=document.getElementById("world");
	obj2=document.getElementById("input");
	obj3=document.getElementById("info");
	textIn=prompt("Entre com a palavra", "Aqui");
	for(var i=0;i<textIn.length;i++){
		textOut.push("_");
		textFinal.push(textIn[i]);
		sizeText=i+1;
		triesLimit=sizeText*2;
	}
	triesCounter=0;
	obj1.innerHTML=textOut;
}
window.addEventListener("load",toStart);