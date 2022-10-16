function ativo(){
	var cx=document.getElementById("texto_selecionado");
	var elemento=document.activeElement;
	var selecao=elemento.value.substring(elemento.selectionStart,elemento.selectionEnd);
	cx.innerHTML=selecao;

	//document.getElementById("texto_selecionado").innerHTML=document.activeElement.value.substring(document.activeElement.selectionStart,document.activeElement.selectionEnd);
}
function inicia(){
	var texto=document.getElementById("txt_original");
	texto.addEventListener("mouseup",ativo);
}
window.addEventListener("load",inicia);