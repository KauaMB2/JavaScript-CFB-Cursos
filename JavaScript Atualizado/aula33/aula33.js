const query_primeiraDiv=document.querySelector("div")//Pega somente primeira div do HTML
const query_divTodas=[...document.querySelectorAll("div")]//Pega todas as divs do HTML
const query_divP=[...document.querySelectorAll("div > p")]//Pega todos os elementos "p" que estão dentro de alguma "div"
const query_Div_Clas=[...document.querySelectorAll("div[class]")]//Pega todos os elementos "div" que também contem "class"
const query_classC1=[...document.querySelectorAll(".c1")]//Pega todos os elementos com classe ".c1"
const query_C1_p=[...document.querySelectorAll(".c1,p")]//Pega todos os elementos com classe ".c1" e elementos também "p"

console.log(query_primeiraDiv)
console.log(query_divTodas)
console.log(query_divP)
console.log(query_Div_Clas)
console.log(query_classC1)
console.log(query_C1_p)


