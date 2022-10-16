var l,a,px,py,painel, onj;
function info(){
	l=window.innerWidth;
	a=window.innerHeight;
	px=window.screenX;
	py=window.screenY;
	painel.innerHTML="L: "+l+" - A: "+a+"<br>X: "+px+" - Y: "+py;
}
function inicia(){
	obj=document.getElementById("btnTam");
	obj.addEventListener("click",info);
	painel=document.getElementById("painel");
}
window.addEventListener("load",inicia);