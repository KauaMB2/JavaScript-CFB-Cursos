function inicia(){
	document.getElementById("btnContar").addEventListener("click",function(){
	var lista=document.getElementById("listaElementos");
	var num=lista.childNodes.length;
	alert(num);
	});

	document.getElementById("btnAdd").addEventListener("click",function(){
		var lista=document.getElementById("listaElementos");
		var texto=document.getElementById("fnovo");
		var li=document.createElement("li");
		li.textContent=texto.value;//O texto de li será a string "text.value"
		lista.insertBefore(li,lista.childNodes[1]);//Adiciona um elemento antes do 
		texto.value="";							   //elemento de número 1
		texto.focus();//Coloca o foco do cursor na entrada de informação(input)
	});
}
window.addEventListener("load",inicia);