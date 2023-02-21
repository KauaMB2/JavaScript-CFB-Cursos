//O spread(...) é um comando que "explode", tornando individual, os elementos de um array
const valores=[10,20,30]
const teste=(n1,n2,n3)=>{
	return n1+n2+n3
}
console.log(valores)
console.log(...valores)
console.log(teste(...valores))
