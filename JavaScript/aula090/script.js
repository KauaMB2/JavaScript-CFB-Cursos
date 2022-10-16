function definePainel(){
	var obj=event.target;
	var painel=document.getElementById("painel");
	painel.innerHTML="Modelo: " + obj.dataset.modelo+"<br>";
	painel.innerHTML+="Cor: " + obj.dataset.cor+"<br>";
	painel.innerHTML+="Potencia: " + obj.dataset.pot+" cavalos<br>";
	painel.innerHTML+="Velocidade: " + obj.dataset.vel+" km/h";
}
function inicia(){
	document.getElementById("c1").addEventListener("click",definePainel);
	document.getElementById("c2").addEventListener("click",definePainel);
	document.getElementById("c3").addEventListener("click",definePainel);
	document.getElementById("c4").addEventListener("click",definePainel);
}
window.addEventListener("load",inicia);