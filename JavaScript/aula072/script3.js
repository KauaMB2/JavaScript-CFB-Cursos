function voltar(){
	window.location.assign("aula072.html");//Chama nova página
}
function inicia(){
	document.getElementById("painel").innerHTML=sessionStorage.nome;
	document.getElementById("btnBack").addEventListener("click",function(){
		voltar();
	});
}
window.addEventListener("load",inicia);