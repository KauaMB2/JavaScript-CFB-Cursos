var mochila=[], mochila1=[], mochila2=[], pos;
mochila1.push("Faca");
mochila1.push("Mouse");
mochila1.push("Teclado");
mochila1.push("Monitor");
mochila1.push("Espada");
mochila1.push("Pederneira");
mochila1.push("Lanterna");

mochila2.push("Arame");
mochila2.push("Luvas");
mochila2.push("Botas");
mochila2.push("Moeda");
mochila2.push("Canivete");
mochila2.push("Meias");
mochila2.push("Joelheiras");

mochila=mochila1.concat(mochila2);
for(var i=0;i<mochila.length;i++){
	document.write(mochila[i]+"<br>");
}
document.write("<br>Tamanho da mochila1: "+mochila1.length);
document.write("<br>Tamanho da mochila2: "+mochila2.length);
document.write("<br>Tamanho da mochila: "+mochila.length+"<br>");
pos=mochila.indexOf("Arame");
if(pos < 0){
	document.write("Não há elementos na mochila<br>");
}else{
	document.write("Posição do elemento: " + pos + "<br>");
}
//mochila.sort(); - Ordena os elementos
//mochila.reverse(); - Inverte os elementos
//var x = mochila.join(); - Coloca todos os elementos em uma variavel do tipo string,separadospor vírgula.
//EU ACHO QUE SÓ FUNCIONA COM NÚMEROOOOOOOOSSSS DENTRO DOS ARRAYS E NÃO COM PALAVRAASS