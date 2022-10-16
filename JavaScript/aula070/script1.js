var vcorf,vcort,vnome;

	if(typeof(Storage)!="undefine"){
				
	}else{
		document.write("Sem suporte a Web Storage!");
}

function gravar(){
	vnome=document.getElementById("fnome").value;
	localStorage.corf=vcorf;
	localStorage.cort=vcort;
	localStorage.nome=vnome;
	}

function defineCor(op,cor){
	if(op==1){
		document.body.style.backgroundColor=cor;
		vcorf=cor;
	}else{
		document.body.style.color=cor;
		vcort=cor;
	}
}