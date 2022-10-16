const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".c1")]

console.log(caixa1.hasChildNodes())//Pergunta se tem filho
console.log(btn_c[0].hasChildNodes())//Pergunta se tem filho
console.log(caixa1.childNodes)//Devolve uma lista com todos os filhos
console.log("======================")
console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "NÃO possui filhos")//Operador ternário para ver se a div tem ou nn filhos 
console.log(caixa1.firstElementChild.innerHTML="primeiroElemento")//Escreve "primeiroElemento" no primeiro elemento dentro da div
console.log(btn_c[1].parentNode.parentNode)//Pega o avô