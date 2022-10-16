console.log("Início do programa!")
function soma(...valores){
	let resultado=0
	for (let v of valores){
		resultado+=v
	}
	return "Resultado: "+resultado+" | Tamanho do array: "+ valores.length
}

console.log(soma(1,2))
console.log(soma(1,2,3))
console.log(soma(1,2,3,5))
console.log(soma(1,2,3,5,7))
console.log(soma(1,2,3,5,7,11))
console.log(soma(1,2,3,5,7,11,13))
console.log("========================\nFim do programa!")