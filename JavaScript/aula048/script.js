var texto1=document.getElementById("txt").innerHTML;
var text2=texto2;
var res=texto1.indexOf();//indexOf()=Posição do primeiro caracter encontrado|lastIndexOf()=Posição do último caracter encontrado
if(res<0){
	document.write("Letra não encontrada");
}else{
	document.write(res);
}
/*
var res=texto1.localeCompare(texto2);Compara texto1 com texto2, se são iguais ou não
var res=texto1.slice(22,32);Retorna o texto da posição 22 até 32;
var res=texto1.split("t");Sempre que tiver um "t", o text será dividido,ficará salvo em arrays
var res=texto1.substr(4,6);Corta um pedaço do texto
var res=texto1.toUpperCase();Converte tudo para maiúsculo
var res=texto1.toLowerCase();Converte tudo para minúsculo*/