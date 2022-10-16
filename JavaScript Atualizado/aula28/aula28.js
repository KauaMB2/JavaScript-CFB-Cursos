const cursos=['HTML','CSS','JavaScript','PHP','Python','Dart']
cursos.map((el,i)=>{/*Divide os elementos em "e"(Conteúdo) e "i"(Índice)*/
	console.log("Curso: "+el+" - Posição do curso: "+i)
})

const converterInt=(e)=>parseInt(e)/*função para converter os elementos da lista para inteiros*/
let num=['1','2','3','4','5']
console.log(num)
num=num.map(converterInt)/*Chama fuñção "converterInt" e entrega a var "num" como argumento*/
console.log(num)

let el=document.getElementsByTagName("div")/*Pega todos os alementos da Tag <div>*/
el=[...el]
el.map((e,i)=>{/*Divide os elementos em "e"(Conteúdo) e "i"(Índice)*/
	console.log(e)
	console.log(i)
})
/*
A função .map consiste em transformar a lista em um objeto cheio de possíveis funções a serem chamadas
*/