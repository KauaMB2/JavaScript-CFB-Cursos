//Aula #30 - Funções: https://www.youtube.com/watch?v=Y9kOOEVGALI&list=PLx4x_zx8csUj3IbPQ4_X5jis_SkCol3eC&index=30
//-------------------------------------------------
var numeros=new Array(1,2,3);
function media(nums){
	var tam=nums.length;
	var soma=0;
	for(var i=0;i<tam;i++){
		soma+=nums[i];
	}
	return Math.round(soma/tam);
}
document.write("Média: "+media(numeros));