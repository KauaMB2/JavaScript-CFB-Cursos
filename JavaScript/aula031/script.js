//Aula #31 - Escopo de variáveis
//--------------------------------------------------
var nomeCor="Vermelho";
var nomeCor;//No JavaScript você pode criar variáveis com mesmo nome
function cor(){
	var nomeCor="Azul";//Variável válida somente para o escopo da função cor()
	document.write(this.nomeCor+"<br>"+nomeCor+"<br>");//O comando this.nomeCor faz com que seja
}													   //exibido a variável nomeCor="Vermelha"
cor();
document.write(nomeCor+"<br>");