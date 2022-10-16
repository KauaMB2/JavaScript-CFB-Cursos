const caixa1=document.querySelector("#caixa1")
const cursos=[...document.querySelectorAll(".c1")]

caixa1.addEventListener("click",(evt)=>{
	console.log("clicou")
})
cursos.map((el)=>{
		el.addEventListener("click",(evt)=>{
			evt.stopPropagation()//Tira o escutador do evento pai(#caixa1) de cima dos elementos filhos(.c1)
	})
})