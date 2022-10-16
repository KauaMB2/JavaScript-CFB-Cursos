var num;
try{
	num=prompt("Digite um valor");
	if(num>10){
		throw new Error("Valor inválido(num>10)");
	}
}catch(e){
	console.log("ERRO " + e.message);
	num=10;
}finally{
	document.write("Valor: " + num);
}