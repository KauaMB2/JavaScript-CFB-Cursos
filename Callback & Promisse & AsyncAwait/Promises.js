console.log("Ordem de retornos(Promisses):")
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
const returnedPromise=PromiseOn()
  .then((sucesso)=>console.log("2° Retorno: "+sucesso+" | Retorno da função APÓS esperar os 2 segundos"))//Executa caso o resolve() seja executado
  .catch((erro)=>console.log("2° Retorno: "+erro))//Executa caso o rejected() seja executado
console.log("1° Retorno: "+returnedPromise+" | Retorno da função  ANTES de esperar os 2 segundos")