function inicia(){
	var elementos=document.getElementById("cfbcursos").childNodes;
	document.getElementById("cfbcursos").remove();
}

window.addEventListener("load",inicia);