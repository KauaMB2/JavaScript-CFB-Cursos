const f1=function(...valores){//Função anônima
	let resultado=0
	for (let v of valores){
		resultado+=v
	}
	return "Resultado: "+resultado+" | Tamanho do array: "+ valores.length
}
console.log(f1(1,2,3,5))


const f2=new Function("...valores","return valores.length")//Função Construtor anônima
console.log(f2(1,2,3,5,7,11,13))