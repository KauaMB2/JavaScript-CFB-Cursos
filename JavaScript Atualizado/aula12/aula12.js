//Spread => ...


const jogador1={nome:"Bruno",energia:100,vidas:3,magia:30}
const jogador2={nome:"Bruce",energia:80,vidas:5,velocidade:100}
const jogador3={...jogador1,...jogador2}

console.log(jogador3)

const soma=(v1,v2,v3)=>{
	return v1+v2+v3
}

console.log(soma(...[1,5,4]))

const obj1=document.getElementsByTagName("div")
const obj2=[...document.getElementsByTagName("div")]
console.log(obj1)
console.log(obj2)
function escreveCurso(){
	obj2.forEach(element=>{
		console.log(element)
		element.innerHTML="Curso"
	})
}