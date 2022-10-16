var tempo = 0;
function mudarCor(){
	var obj=document.getElementById("dv1");
	var r=Math.floor(Math.random()*255);
	var g=Math.floor(Math.random()*255);
	var b=Math.floor(Math.random()*255);
	obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
}
//window.addEventListener("load",mudarCor);
//var tempo=setTimeout(mudarCor,50);
function iniciar(){
	tempo=setInterval(mudarCor,100);
}
function parar(){
	clearInterval(tempo);
}
function addEventos(){
	document.getElementById("bt1").addEventListener("click",iniciar);
	document.getElementById("bt2").addEventListener("click",parar);
}
window.addEventListener("load",addEventos);