setInterval(foco,0);
function foco(){
	var res=document.getElementById("simnao");
	var painel=document.getElementById("painel");
	if(document.hasFocus()){
		res.innerHTML="";
		painel.style.display="none";
	}else{
		res.innerHTML=">>NÃO<<";
		painel.style.display="block";
	}
}