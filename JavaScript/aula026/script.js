var elementos=document.querySelectorAll("div > p");
for(var i = 0; i<elementos.length; i++){
	elementos[i].style.color="#0f0";
}
var x=document.querySelectorAll("p.texto");
x[0].style.color="#00f";
var y=document.querySelectorAll("h2.titulo");
document.write(y[0].innerHTML);
var w=document.querySelectorAll("p.texto");
w[0].innerHTML="NOVO TEXTO EM \"CFB Cursos\"(ONDE ESTÁ AZUL - AQUI MESMO!!)";