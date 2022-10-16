function inicia(){
		document.getElementById("btnDestaque").addEventListener("click",function(){
		var num=document.getElementById("fnum").value;//Pega o valor digitado
		var p=document.getElementsByTagName("p");
		for(var i=0;i<p.length;i++){
			p[i].removeAttribute("style");//Remove o atributo de todas as tags "p"
		}
		var at=document.createAttribute("style");//Cria atributo
		at.value="color:#f00;font-size:25px";//Adiciona valores a esse atributo
		p[num].setAttributeNode(at);//adiciona o atributo à tag "p" de número "num"
	});
}
window.addEventListener("load",inicia);