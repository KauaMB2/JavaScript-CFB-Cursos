function aluno(nome,nota){
	this.nome=nome
	this.nota=nota
	this.dados_anonimo=function(){//Função anônima
		setTimeout(function (){
			console.log(this.nome)//this.nome referente à função timeout
			console.log(this.nota)//this.nota referente à função timeout
		},2000)
	}
	this.dados_arrow=function(){//Arrow Function
		setTimeout(()=>{
			console.log(this.nome)//this.nome referente à função pai(function aluno)
			console.log(this.nota)//this.nome referente à função pai(function aluno)
		},2000)
	}
}

al1=new aluno("Bruno",100)//Cria novo objeto na função classe
al1.dados_anonimo()
al1.dados_arrow()