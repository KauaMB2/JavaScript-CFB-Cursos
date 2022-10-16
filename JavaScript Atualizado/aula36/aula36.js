const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btnCopiar=document.querySelector("#btn_copiar")
const btnRetornar=document.querySelector("#btn_retornar")
var cursoTodosC1=[...document.querySelectorAll(".c1")]
var cursoTodosC2=[...document.querySelectorAll(".c2")]
cursoTodosC1.map((el)=>{//Adiciona em todos os elementos de "cursoTodosC1" um escutador para "click"
	el.addEventListener("click",(evt)=>{
		const curso=evt.target
		curso.classList.toggle("selecionado")//toggle => O elemento curso tem a classe "selecionado"? Sim - Remove | Não - Adiciona
	})
})
btnCopiar.addEventListener("click",()=>{
	const selecionados=[...document.querySelectorAll(".selecionado")]
	const naoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]//Pega todos os elementos que tem a classe "curso" e que não tem a classe "selecionados"
	selecionados.map((el)=>{
		caixa2.appendChild(el)
	})
	naoSelecionados.map((el)=>{
		caixa1.appendChild(el)
	})
})