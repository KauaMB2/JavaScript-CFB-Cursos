var dt=new Date();
		
var diasem=dt.getDay();
var dia=dt.getDate();
var mes=dt.getMonth();
var ano=dt.getFullYear();

var hora=dt.getHours();
var minutos=dt.getMinutes();
var segundos=dt.getSeconds();

var meses=new Array("Janeiro", "Fevereiro", "Março", "Abriu", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
var dias=new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado");
document.write(dias[diasem]+", "+dia+" de "+meses[mes]+" de "+ano+"<br> ");
document.write(hora+":"+minutos+":"+segundos);