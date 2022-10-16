var painel;
function inicia(){
	painel=document.getElementById("painel");
	painel.innerHTML+="Resolução:" + screen.width + "px X "+ screen.height + "px<hr>";
	painel.innerHTML+="Resolução disponível:" + screen.availWidth + "px X "+ screen.availHeight + "px<hr>";
	painel.innerHTML+="Profundidade de cores (imagens): " + screen.colorDepth + "bits<hr>";
	painel.innerHTML+="Resolução cor da tela (pixel): " + screen.pixelDepth + "bits/pixel<hr>";
}
window.addEventListener("load",inicia);