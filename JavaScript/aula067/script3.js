var painel,btnB,btnF,btnG;

function hi(num){
				window.history.go(num);//Avança ou volta um numero "num" no histórico
}
function inicia(){
	btnB=document.getElementById("btnBack");
	btnF=document.getElementById("btnForward");
	btnG=document.getElementById("btnBack2");

	btnB.addEventListener("click",function(){
		hi(-1);//Volta uma página no histórico de navegação 
	});
	btnF.addEventListener("click",function(){
		hi(1);//Avança uma página no histórico de navegação
	});
	btnG.addEventListener("click",function(){
		hi(-2);//Volta duas páginas no histórico de navegação
	});
	painel=document.getElementById("info");
	painel.innerHTML=history.length;//Exibe o tamanho do histórico
}
window.addEventListener("load",inicia);