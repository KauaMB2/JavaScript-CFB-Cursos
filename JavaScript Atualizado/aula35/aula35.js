const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btnCopiar=document.querySelector("#btn_copiar")
const btnRetornar=document.querySelector("#btn_retornar")
var cursoTodosC1=[...document.querySelectorAll(".c1")]
var cursoTodosC2=[...document.querySelectorAll(".c2")]

atualizaCursos=()=>{
	cursoTodosC1=[...document.querySelectorAll(".c1")]
	cursoTodosC2=[...document.querySelectorAll(".c2")]
}

cursoTodosC1.map((el)=>{//Adiciona em todos os elementos de "cursoTodosC1" um escutador para "click"
	el.addEventListener("click",(evt)=>{
		const curso=evt.target
		curso.classList.toggle("selecionado")//toggle => O elemento curso tem a classe "selecionado"? Sim - Remove | Não - Adiciona
	})
})
btnCopiar.addEventListener("click",()=>{
	const selecionados=[...document.querySelectorAll(".selecionado")]
	selecionados.map((el)=>{
		el.classList.remove("c1")
		el.classList.add("c2")
		caixa2.appendChild(el)
	})
	atualizaCursos()
})


cursoTodosC2.map((el)=>{//Adiciona em todos os elementos de "cursoTodosC1" um escutador para "click"
	el.addEventListener("click",(evt)=>{
		const curso=evt.target
		curso.classList.toggle("selecionado")//toggle => O elemento curso tem a classe "selecionado"? Sim - Remove | Não - Adiciona
	})
})
btnRetornar.addEventListener("click",()=>{
	cursoTodosC2.map((el)=>{
		if(!el.classList.contains("selecionado")){//Verifica quais são os elementos que nn tem a classe "selecionado"
			el.classList.add("c1")
			el.classList.remove("c2")
			caixa1.appendChild(el)
		}
	})
	atualizaCursos()
})
