function inicia(){

	var elemento=document.getElementById("p2");
	var att=elemento.getAttribute("id");
	console.log(att);
}
window.addEventListener("load",inicia);