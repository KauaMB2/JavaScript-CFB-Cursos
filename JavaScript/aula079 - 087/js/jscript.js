var diryJ,dirxJ,jog,velJ,velT,pjx,pjy,vidaPlaneta,tmpCriaBomba,indiceExplosao,indiceSom,telaMsg;
var jogo,frames,tamTelaW,tamTelaH,contBombas,painelContBombas,bombasTotal,velB,barraPlaneta,divContBombas;
function teclaDw(){
	var tecla=event.keyCode;
	switch(tecla){
		case 38:
			diryJ=-1;
			break;
		case 40:
			diryJ=1;
			break;
		case 37:
			dirxJ=-1;
			break;
		case 39:
			dirxJ=1;
			break;
		case 32:
			atira((pjx+17),pjy)
			break;
		default:
			console.log("Erro desconhecido ao movimentar a nave!!");
			break;
	}
	/*if(tecla==38){//Cima
		diryJ=-1;
	}else if(tecla==40){//Baixo
		diryJ=1;
	}
	if(tecla==37){//Esquerda
		dirxJ=-1;
	}else if(tecla==39){//Direita
		dirxJ=1;
	}
	if(tecla==32){//Espaço / Tiro
		//TIRO
	}*/
}
function teclaUp(){
	var tecla=event.keyCode;
	if((tecla==38)||(tecla==40)){
		diryJ=0;
	}
	if((tecla==37)||(tecla==39)){//Esquerda
		dirxJ=0;
	}
}
function criaBomba(){
	if(jogo){
		var y=0;
		var x=Math.random()*tamTelaW;
		var bomba=document.createElement("div");
		var att1=document.createAttribute("class");
		var att2=document.createAttribute("style");
		att1.value="bomba";
		att2.value="top:"+y+"px;left:"+x+"px";
		bomba.setAttributeNode(att1);
		bomba.setAttributeNode(att2);
		document.body.appendChild(bomba);
		contBombas--;
		divContBombas=document.getElementById("textoContBombas");
		divContBombas.innerHTML="Bombas: "+contBombas;
	}
}
function controlaBomba(){
	bombasTotal=document.getElementsByClassName("bomba");
	var tam=bombasTotal.length;
	for(var i=0;i<tam;i++){
		if(bombasTotal[i]){
			var pi=bombasTotal[i].offsetTop;
			pi+=velB;
			bombasTotal[i].style.top=pi+"px";
			if(pi>tamTelaH){
				criaExplosao(2,bombasTotal[i].offsetLeft,null)
				vidaPlaneta-=10;
				bombasTotal[i].remove();
			}
		}
	}
}
function atira(x,y){
	var tiro=document.createElement("div");//Cria uma div
	var att1=document.createAttribute("class");//Cria uma class
	var att2=document.createAttribute("style");//Cria um style 
	att1.value="tiroJog";//Define a classe
	att2.value="top:"+y+"px;left:"+x+"px;";//Defione o estilo
	tiro.setAttributeNode(att1);//Adiciona ao tiro, o classe
	tiro.setAttributeNode(att2);//Adiciona ao tiro, o estilo
	const music = new Audio('tiro.wav');
	music.play();
	document.body.appendChild(tiro);//Adiciona o "tiro" no body do HTML
}
function colisaoTiroBomba(tiro){
	var tam=bombasTotal.length;
	for(var i=0;i<tam;i++){
		if(bombasTotal[i]){
			if(
				(
					(tiro.offsetTop<=(bombasTotal[i].offsetTop+40))&&
					((tiro.offsetTop+6>=bombasTotal[i].offsetTop))
				)
				&&
				(
					(tiro.offsetLeft<=(bombasTotal[i].offsetLeft+40))&&
					((tiro.offsetLeft+6>=bombasTotal[i].offsetLeft))
				)
			){
				criaExplosao(1,bombasTotal[i].offsetLeft-25,bombasTotal[i].offsetTop)
				bombasTotal[i].remove();
				tiro.remove();
			}
		}
	}
}
function controlaTiros(){
	var tiros=document.getElementsByClassName("tiroJog");//Pega todos os elementos
	var tam=tiros.length;//Lê o tamanho do array| 		  |da classe "tiroJog"e armazena em um array
	for(var i=0;i<tam;i++){//Percorre o array tiros
		if(tiros[i]){//Verifica se o tiro existe na posição "i" do array
			var pt=tiros[i].offsetTop;//Pega a posição no eixo y(offsetTop) do "tiros[i]"
			pt-=velT;//Subtrai posição do tiro, fazendo com que ele suba
			tiros[i].style.top=pt+"px";//define nova posição do tiro
			colisaoTiroBomba(tiros[i])
			if(pt<0){
				//document.body.removeChild(tiros[i])//Remove tiro se sair da tela
				tiros[i].remove();//Remove tiro se sair da tela
			}
		}
	}
}
function criaExplosao(tipo,x,y){//Tipo 1=AR, 2=TERRA
	if(document.getElementById("explosao"+(indiceExplosao-4))){
		document.getElementById("explosao"+(indiceExplosao-4)).remove();
	}
	var explosao=document.createElement("div");
	var img=document.createElement("img");
	var som=document.createElement("audio");
	//Atributos para div
	var att1=document.createAttribute("class");
	var att2=document.createAttribute("style");
	var att3=document.createAttribute("id");
	//Atributos para imagem
	var att4=document.createAttribute("src");
	//Atributos par audio
	var att5=document.createAttribute("src");
	var att6=document.createAttribute("id");
	att3.value="explosao"+indiceExplosao;
	if(tipo==1){
		att1.value="esplosaoAr";
		att2.value="top:"+y+"px;left:"+x+"px;";
		att4.value="explosao_ar.gif?"+new Date();
	}else{
		att1.value="esplosaoChao";
		att2.value="top:"+(tamTelaH-57)+"px;left:"+(x-17)+"px;";
		att4.value="explosao_chao.gif?"+new Date();
	}
	att5.value="exp1.mp3?"+new Date();
	att6.value="som"+indiceSom;
	explosao.setAttributeNode(att1);//Adiciona atributo "att1" na div "explosao"
	explosao.setAttributeNode(att2);//Adiciona atributo "att2" na div "explosao"
	explosao.setAttributeNode(att3);//Adiciona atributo "att3" na div "explosao"
	img.setAttributeNode(att4);//Adiciona atributo "att4" na "img"
	som.setAttributeNode(att5);//Adiciona atributo "att5" no "som"
	som.setAttributeNode(att6);//Adiciona atributo "att6" no "som"
	explosao.appendChild(img);//Adiciona a imagem na div "explosao"
	explosao.appendChild(som);//Adiciona o som na div "explosao"
	document.body.appendChild(explosao);//Adiciona a "explosao" no document HTML
	document.getElementById("som"+indiceSom).play();
	indiceExplosao++;//Os indices servem somente na hora da atribuição de divs em cada explosão, fazendo com que
	indiceSom++;	 //as explosões tenham ids diferentes, consequentemente, serão explosões diferentes
}
function controlaJogador(){
	pjy+=diryJ*velJ;
	pjx+=dirxJ*velJ;
	if(pjx<=0){
		pjx=1024;
	}else if(pjx>=1024){
		pjx=0;
	}
	jog.style.top=pjy+"px";
	jog.style.left=pjx+"px";
}
function gerenciaGame(){
	barraPlaneta.style.width=vidaPlaneta+"px";
	if(contBombas<=0){
		jogo=false;
		clearInterval(tmpCriaBomba);
		telaMsg.style.backgroundImage="url('vitoria.jpg')";
		telaMsg.style.display="block";
	}
	if(vidaPlaneta<=0){
		jogo=false;
		clearInterval(tmpCriaBomba);
		telaMsg.style.backgroundImage="url('derrota.jpg')";
		telaMsg.style.display="block";
	}
}
function gameLoop(){
	if(jogo){
		controlaJogador();
		controlaTiros();
		controlaBomba();
	}
	gerenciaGame();
	frames=requestAnimationFrame(gameLoop);
}
function reinicia(){
	bombasTotal=document.getElementsByClassName("bomba");
	var tam=bombasTotal.length;
	for(var i=0;i<tam;i++){
		if(bombasTotal[i]){
			bombasTotal[i].remove();
		}
	}
	telaMsg.style.display="none";
	clearInterval(tmpCriaBomba);
	cancelAnimationFrame(frames);
	vidaPlaneta=300;
	pjx=475;
	pjy=590;
	contBombas=150;
	jogo=true;
	tmpCriaBomba=setInterval(criaBomba,1700);
	gameLoop();
}
function inicia(){
	jogo=false;
	//Inicialização tela
	tamTelaH=window.innerHeight;
	tamTelaW=window.innerWidth;
	//Inicialização jogador
	dirxJ=diryJ=0;
	pjx=475;
	pjy=590;
	velJ=velT=5;
	vidaPlaneta=300;
	jog=document.getElementById("naveJog");
	jog.style.top=pjy+"px";
	jog.style.left=pjx+"px";
	//Controle das bombas
	contBombas=150;
	velB=3;
	//Controle do planeta
	barraPlaneta=document.getElementById("barraPlaneta");
	barraPlaneta.style.width=vidaPlaneta+"px";
	tmpCriaBomba=setInterval(criaBomba,1700);
	//Controle de explosão
	indiceExplosao=indiceSom=0;
	//Telas
	telaMsg=document.getElementById("telaMsg");
	telaMsg.style.backgroundImage="url('intro.jpg')";
	telaMsg.style.display="block";
	document.getElementById("btnJogar").addEventListener("click",reinicia);
	gameLoop();
}
window.addEventListener("load",inicia);
document.addEventListener("keydown",teclaDw);
document.addEventListener("keyup",teclaUp);