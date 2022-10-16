var painel,btnB,btnF,btnG;
function hB(){
	window.history.back();//Volta para a página anterior no histórico de navegação(back)
}

function hF(){
	window.history.forward();//Avança uma página no histórico de navegação(forward)
}

function hG(){
	window.history.go(-2);//Volta duas páginas no histórico de navegação(-2)
}
function inicia(){
	btnB=document.getElementById("btnBack");
	btnF=document.getElementById("btnForward");
	btnG=document.getElementById("btnBack2");

	btnB.addEventListener("click",hB);
	btnF.addEventListener("click",hF);
	btnG.addEventListener("click",hG);

	painel=document.getElementById("info");
	painel.innerHTML=history.length;//Exibe o tamanho do histórico

}
window.addEventListener("load",inicia);