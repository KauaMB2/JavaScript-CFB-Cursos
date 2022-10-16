const cursos=[...document.querySelectorAll(".curso")]
destaque=false
cursos.map((el)=>{
	el.addEventListener("click",(evt)=>{
		destaque=!destaque
		const el=evt.target
		if(destaque){
			el.classList.add("destaque")
		}else{
			el.classList.remove("destaque")
		}
		console.log(el.innerHTML+" foi clicado")
	})
})