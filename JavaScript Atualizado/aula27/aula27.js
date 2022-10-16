/*
Função geradora é a função que pode ter vários retornos(yield)
e que cada vez que um 'yield' é executado, a função para e memoriza
o ponto em que ela parou para na próxima chama partir daquela ponto
e continua a função até o próximo 'yield'
*/

function* contator(){
	let i=0
	while(true){
		yield i++
		if(i>500){
			break
		}
	}
}
const itc=contator()
for(let c of itc){
	console.log(c)
}


function* perguntas(){
	const nome=yield "Qual seu nome?"/*1ª pergunta*/
	const esporte=yield "Qual seu esporte favorito?"/*2ª pergunta*/
	return "Seu nome é "+nome+" e seu esporte favorito é "+esporte+"." 
}
const itp=perguntas()
console.log(itp.next().value)/*Chama a 1ª pergunta*/
console.log(itp.next("Kauã").value)/*Salva 'Kauã' na 1ª pergunta e chama a 2ª pergunta*/
console.log(itp.next("Basquete").value)/*Salva 'Basquete' na 2ª pergunta e chama o return*/