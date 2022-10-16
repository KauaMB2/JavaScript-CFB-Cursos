var aux=location.hash;
var dados=aux.split("#");
var v1=dados[1];
var v2=dados[2];
document.write(v1);
document.write("<br>");
var h=location.href;
document.write(h);
document.write("<br>");
var o=location.origin;//Protocolo,hostname,porta
document.write(o);
document.write("<br>");
var p=location.pathname;//Caminho
document.write(p);
document.write("<br>");
var pr=location.protocol;//Protocolo
document.write(pr);
document.write("<br>");

aux=location.search;
dados=aux.split("?");
v1=dados[1].split("=")[1];
document.write(v1);

document.write("<hr>");
