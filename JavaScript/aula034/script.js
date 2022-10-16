var px=0;// "+" = Direita | "-" = Esquerda | CONVENSÃO NORMAL
var py=0;// "-" = Direita | "+" = Esquerda | INVERTIDO
var obj;
function mover(){
	var tecla=event.keyCode; //A função event.keyCode pega o código da tecla pracionado
							 //O código é armazenado na variável "tecla"
	// 37=Esquerda - 38=Cima - 39=Direita - 40=Baixo
	if(tecla==37){
		px-=10;
		obj.style.left=px+"px";
	}else if(tecla==38){
		py-=10;
		obj.style.top=py+"px";
	}else if(tecla==39){
		px+=10;
		obj.style.left=px+"px";
	}else if(tecla==40){
		py+=10;
		obj.style.top=py+"px";
	}else if(tecla==13){
		obj.style.backgroundColor="#fff";
		alert("Evento keydown removido");
		this.removeEventListener("keydown", move);
		return;
	}
}
function click(){
	obj=document.getElementById("dv1");
	obj.style.backgroundColor="#f00";
	document.addEventListener("keydown",mover);
}
function addEventos(){
	obj=document.getElementById("dv1");
	obj.addEventListener("click",click);
}
window.addEventListener("load", addEventos);