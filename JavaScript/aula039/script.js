var jog;
var vel;
var dx;
var dy;
var px;
var py;
var anima;
var iniciar;
var parar;
var controle;
function iniciar(){
	vel=5;
	dx=1;
	dy=0;
	px=0;
	py=0;
	iniciar=document.getElementById("iniciar");
	parar=document.getElementById("parar");
	jog=document.getElementById("jogador");
	jog.addEventListener("click",function(){
		if(!controle){
			game();
			controle=true;
		}else{
			cancelAnimationFrame(anima);
			controle=false;
		}
	});//Se clicar no quadrado, a função game para de executar em loop
	parar.addEventListener("click",function(){
		controle=false;
		cancelAnimationFrame(anima);
	});
	iniciar.addEventListener("click",function(){
		if(!controle){
			game();
		}
	});
	game();
}
function game(){
	controle=true;
	px+=(dx*vel);
	console.log("px: "+px+","+" dx: "+dx+","+" vel: "+vel+"\n");
	jog.style.left=px+"px";
	if(px>970){
		dx=(-1);
	}else if(px<0){
		dx=1;
	}
	anima=requestAnimationFrame(game);//chama a função game
}
window.addEventListener("load",iniciar);