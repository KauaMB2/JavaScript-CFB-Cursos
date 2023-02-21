const PromiseOn=()=>{
  let cont = 0
  let n = 10
  const p=new Promise((resolve, rejected) => {
    let t = setTimeout(() => {
      for (let i = 0; i < n; i++) {
      	cont++
      }
      if (cont === n) {//Caso "cont" seja igual a "n", ou seja, a função de fato foi executada
        resolve(cont)//return cont
      } else {//Se não...
        rejected("ERRO")//return "erro"
      }
    },2000)
  })
  return p
}
const PromiseOff=()=>{
  let cont = 0
  let n = 10
  let t = setTimeout(() => {
    	for (let i = 0; i < n; i++) {
      	cont++
	    }
	},2000)
  return cont
}

const AsyncOn=async ()=>{
  let cont = 0
  let n = 10
  const p=new Promise((resolve, rejected) => {
    let t = setTimeout(() => {
      for (let i = 0; i < n; i++) {
        cont++
      }
      if (cont === n) {//Caso "cont" seja igual a "n", ou seja, a função de fato foi executada
        resolve(cont)//return cont
      } else {//Se não...
        rejected("ERRO")//return "erro"
      }
    },2000)
  })
  return p
}


PromiseOn()
	.then(sucesso => console.log("PromisseOn: " + sucesso))//Executado caso o retorno "resolve" seja executado
	.catch(erro => console.log(erro))//Executado caso o retorno "rejected" seja executado
console.log(AsyncOn())
console.log("PromisseOff: "+PromiseOff())
console.log("=========")


const main=async ()=>{
	console.log("PromisseOff: "+PromiseOff())
	PromiseOn()
		.then(sucesso => console.log("PromisseOn: " + sucesso))//Executado caso o retorno "resolve" seja executado
		.catch(erro => console.log(erro))//Executado caso o retorno "rejected" seja executado
	console.log("AsyncOn: "+await AsyncOn())
}
main()

// Uma Promise nada mais é do que uma função que PROMETE esperar o tempo necessário para que uma função seja completamente executada para, somente depois, retornar seu valor(encerrando-a) sem impedir que os outros comandos do código sejam executados durante a espera da Promise.
// Isso significa que uma Promisse é uma função que será executada e retornará um valor após um tempo enquanto o resto do programa continua sendo executado normalmente.
