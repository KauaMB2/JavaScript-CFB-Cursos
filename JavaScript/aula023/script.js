var cor=prompt("Escolha uma cor(\"preto\", \"azul\", \"vermelho\")");
var x=prompt("Digite o valor da largura");
var y=prompt("Digite o valor da altura");
var cx=document.getElementById("caixa");
cx.style.border="1px solid #000";
cx.style.width=x + "px";
cx.style.height=y + "px";
switch(cor){
	case "preto":
		cx.style.backgroundColor="#000000";
		break;
	case "azul":
		cx.style.backgroundColor="#0000ff";
		break;
	case "vermelho":
		cx.style.backgroundColor="#ff0000";
		break;
}
document.getElementById("texto").style.color="#f00";
document.getElementById("texto").style.fontSize="90px";