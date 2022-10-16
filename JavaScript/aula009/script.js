var nota, res;
nota = prompt("Entre com a nota", "Aqui");
alert("Clique em okey para seguir com o protocolo");
document.write("Nota: " + nota + "<br>");
var res=parseInt(nota);
if(nota>=95){
	res="Aprovado com louvor";
}else if(nota>=60){
	res="Aprovado";
}else if(nota>=40){
	res="Recuperação";
}else if(nota>=20){
	res="Reprovado";
}else{
	res="Reprovado com louvor";
}
alert(res);
document.write(res);