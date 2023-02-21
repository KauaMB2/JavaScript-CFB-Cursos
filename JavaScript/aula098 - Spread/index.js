//O spread(...) é um comando que "explode", tornando individual, os elementos de um array
const produtos=[
	{
		id:1,
		produto:{Mouse:50}
	},
	{
		id:2,
		produto:{Teclado:200}
	},
	{
		id:1,
		produto:{Monitor:100}
	},
]

const clientes=[
	{
		nome:"João"
	},
	{
		nome:"Maria"
	},
	{
		nome:"Mateus"
	}
]

const x={jsonProdutos:{...produtos},meusClientes:{...clientes}}

console.log(x)
console.log(...clientes)