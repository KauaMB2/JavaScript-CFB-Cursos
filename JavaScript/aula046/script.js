var texto=document.getElementById("txt").innerHTML;
//var res=texto.match(/[oa]/ig);Pesquisa letra O e A no texto
//var res=texto.match(/[^oa]/ig);Retorna todos o avalores menos O e A(exclui)
var res=texto.match(/\d/ig);//Pesquisa letra O e A no texto
document.write(res+" : "+res.length+"<br>");
document.write(res[1]);