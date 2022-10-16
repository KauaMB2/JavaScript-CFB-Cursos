/*
function contador(min,max){
	document.write(min+"<br>");
	if(min<max){
		contador(++min,max);
	}
}
contador(10,20);
function fatorial(n){
	if(n==1){
		return 1;
	}
	return n*fatorial(n-1);
}
document.write("Fatorial de 10: "+fatorial(10));
*/
var obj=document.getElementById("dv1");;
var ang=0;
var anima;
function gira(){
	obj.style.transform="rotate("+ang+"deg)";
	ang++;
	if(ang>360){
		ang=0;
	}
	anima=requestAnimationFrame(gira);
}
gira();