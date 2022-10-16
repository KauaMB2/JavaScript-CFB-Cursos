function pagina(pg){
	sessionStorage.nome=document.getElementById("fnome").value;//Recebe o elemento e 
															   //armazena no sesionStorage
	window.location.assign("p"+pg+".html");//Chama nova página
}
function inicia(){
	document.getElementById("btnP2").addEventListener("click",function(){
		pagina(2);
	});
	document.getElementById("btnP3").addEventListener("click",function(){
		pagina(3);
	});
		document.getElementById("btnLimpar").addEventListener("click",function(){
		sessionStorage.clear();
	});
}
window.addEventListener("load",inicia);