const arrayElementos=document.getElementsByTagName("div")
console.log(arrayElementos)

const colecaoHTML=[...document.getElementsByTagName("div")]

console.log(colecaoHTML)

colecaoHTML.map((e)=>{
	console.log(e)
	e.style.color="#fff"
	e.style.backgroundColor="#000"
})