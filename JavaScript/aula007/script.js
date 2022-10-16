var v1, v2, tx1, tx2;
v1 = prompt("Escreva um valor", "Aqui");
alert("Clique em okey para seguir com o protocolo");
document.write("Variável1: " + v1 + "<br>");
v2 = prompt("Escreva um valor novamente", "Aqui");
alert("Clique em okey para seguir com o protocolo");
document.write("Variável2: " + v2 + "<br>");
tx1="CFB Cursos";
tx2="Curso de JavaScript";
var convertido1=parseInt(v1);
var convertido2=parseInt(v2);
if(convertido1 != convertido2){
	document.write(tx1);
	alert(tx1);
}else{
	document.write(tx2);
	alert(tx2);
}