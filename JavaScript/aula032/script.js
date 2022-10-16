function mudarCor(obj, cor){
	obj.style.background=cor;
}
function mudarPos(obj){
	obj.style.position="absolute";
	obj.style.left=Math.random()*500+"px";
	obj.style.top=Math.random()*500+"px";
}
function BemVindo(){
	var data=new Date();
	var hora=data.getHours();
	var txt="";
	if(hora<12){
		txt="Bom dia";
	}else if(hora<18){
		txt="Boa tarde";
	}else{
		txt="Boa tarde";
	}
	alert("Olá, "+txt);
}