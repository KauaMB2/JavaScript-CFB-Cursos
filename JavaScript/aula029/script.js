//Pág 55 da apsotila
//var PI=Math.PI;
//var RaizDe2=Math.SQRT2;
//var PIarredondado=Math.round(PI);
var num1=new Array(Math.PI, Math.SQRT2, Math.round(Math.PI));
for(var i=0;i<num1.length;i++){
	document.write(num1[i]+"<br>"+typeof(num1[i])+"<br>");
}
document.write("<hr>");
var x = (30*Math.PI)/180;
var num2=new Array(Math.cos(x),Math.sin(x), Math.atan(x));
for(i=0;i<num2.length;i++){
	document.write(num2[i]+"<br>"+typeof(num2[i])+"<br>");
}