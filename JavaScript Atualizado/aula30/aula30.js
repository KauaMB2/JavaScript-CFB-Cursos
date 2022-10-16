const div1=document.getElementById("c1")
console.log(div1)
console.log(div1.id)
console.log(div1.innerHTML)
div1.innerHTML="CFB Cursos"
div1.id="d1"
div1.style.color="#008"
div1.style.backgroundColor="#a00"
console.log(div1.id)
console.log(div1.innerHTML)

const d2=document.getElementById("c2")
const d3=document.getElementById("c3")
const d4=document.getElementById("c4")
const d5=document.getElementById("c5")
const d6=document.getElementById("c6")

const arrayElementos=[d2,d3,d4,d5,d6]
arrayElementos.map((e)=>{
	e.style.color="#800"
	e.style.backgroundColor="#0a0"
	console.log(e)
})
console.log(arrayElementos)