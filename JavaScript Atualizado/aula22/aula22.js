let VALOR_PADRAO=0
let valor=0
function add(v=VALOR_PADRAO){
	valor=valor+v
	return valor
}

for(var i=0;i<=10;i++) {
	let resultado=add(i)
	console.log(resultado)
}