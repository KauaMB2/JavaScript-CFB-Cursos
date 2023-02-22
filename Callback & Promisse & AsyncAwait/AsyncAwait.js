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

const funcaoAssincrona=async ()=>{
  const returnedPromise=PromiseOn()//Retorna o valor antes de esperar os 2 segundos necessários da Promise
  console.log(returnedPromise)
  const returnedPromiseAwait=await PromiseOn()//O Await EXIGE que a função pare sua execução nesse ponto até que a função assíncrona chamada retorner algum valor
  console.log(returnedPromiseAwait)
}

funcaoAssincrona()