let n=0
const max=1000
while (true){
	if(n>=max){
		break
	}
	n++
	console.log("CFB Cursos - " + n)
}

/*===========================*/

n=0
for(var i=0;i<max;i++){
	if(i%2==true){
		continue
	}
	n++
}
console.log("Quantidade de números ímpares: "+ n)
console.log("Fim do programa!")