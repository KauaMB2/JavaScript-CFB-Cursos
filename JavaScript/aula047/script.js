var texto=document.getElementById("txt").innerHTML;
var txt2=" - aula 47 heheheh"
//var res=texto.search(/a/i); - Procura o primeiro "a" no texto
//var res=texto.replace(/curso/ig,"aula"); - Troca onde está escrito "curso" por "aula"
//var res=texto.charAt(11); - Retorna o caracter da posição 11
var res=texto.charCodeAt(0);
document.write(res+"<br>");
document.write(String.fromCharCode(res)+"<br>")
res=texto.concat(txt2);//Junta "texto" com "txt2"
document.write(res);