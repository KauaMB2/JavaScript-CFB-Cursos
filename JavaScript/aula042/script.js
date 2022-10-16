var tabela=document.getElementById("tbnotas");
var nota;
for(var i=1;i<tabela.rows.length;i++){
	nota=parseFloat(tabela.rows[i].cells[1].innerHTML)+parseFloat(tabela.rows[i].cells[2].innerHTML);
	tabela.rows[i].cells[3].innerHTML=nota;
}
var n=[];
for(var i=0;i<=3;i++){
	var x="n"+i;
	n[i]=document.getElementById(x);
	console.log(n[i]);
}
for(var i=0;i<4;i++){
	if(n[i].innerHTML < 70){
		n[i].style.color="#f00";
	}else{
		n[i].style.color="#00f";
	}
}