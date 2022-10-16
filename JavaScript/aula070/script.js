if(typeof(Storage)!="undefine"){
		if(localStorage.visitas){
		localStorage.visitas=Number(localStorage.visitas)+1;
		}else{
		//localStorage.setItem("visitas",1);
		localStorage.visitas=1;//Cria visitas
	}
	document.write("Visitas: "+localStorage.visitas);
}else{
	document.write("Sem suporte a Web Storage!");
}