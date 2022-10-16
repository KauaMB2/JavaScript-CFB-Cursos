function inicia(){
	var novoH1=document.createElement("h1");//Cria um elmento "h1" no HTML
	var listaCursos=document.getElementById("cfbcursos");//Pegar elemento com o id "cfbcursos"
	var antigoP=listaCursos.childNodes[9];//Pega item 9 da lista no HTML
	var txtH=document.createTextNode("antigoP.innerHTML");//"txtH" será igual á "antigoP"(item 9)
	novoH1.appendChild(txtH);//define "novoH1" como sendo "txtH"(item9)
	listaCursos.replaceChild(novoH1,antigoP);//Substitui item "antigoP" por "novoH1"
}
window.addEventListener("load",inicia);