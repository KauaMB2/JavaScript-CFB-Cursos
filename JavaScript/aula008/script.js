var v1, v2;
v1 = prompt("Entre com o valor da Energia", "Aqui");
alert("Clique em okey para seguir com o protocolo");
document.write("Variável1: " + v1 + "<br>");
v2 = prompt("Entre com o valor da pontos", "Aqui");
alert("Clique em okey para seguir com o protocolo");
document.write("Variável2: " + v2 + "<br>");
var energia=parseInt(v1);
var pontos=parseInt(v2);
if(((pontos>=30)&&(pontos<=40)&&(energia))||(pontos>=70)&&(pontos<=80)&&(energia >=40)){
	document.write("Ganhou");
}else{
	document.write("Perdeu");
}