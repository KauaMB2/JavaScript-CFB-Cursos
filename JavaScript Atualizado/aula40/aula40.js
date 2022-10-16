const caixa1=document.querySelector("#caixa1")
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","Arduino"]
cursos.map((el,chave)=>{
	const novoElemento=document.createElement("div")//Cria novo elemento <div>
	novoElemento.setAttribute("id","c"+(chave+1))//Adiciona atribudo id em cada div
	novoElemento.setAttribute("class","curso c1")//Adiciona atributo class em cada div
	novoElemento.innerHTML=el//Define o conteúdo da div
	caixa1.appendChild(novoElemento)//Coloca a div criada dentro da caixa1
})


