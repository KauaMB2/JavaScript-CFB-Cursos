console.log("Ordem de retornos(Callbacks):")

const getUser=(callback)=>{
  var userObj={}
  setTimeout(function() {
    userObj={ name: 'John', age: 30 }
    callback(userObj)
  }, 2000)
  return userObj
}

const displayUser=()=>{
  console.log("Processando...[Espera dois segundos para chamar o callback]")
  const returnedUser=getUser(function(user) {
    console.log("2° Retorno: "+ user.name + ' is ' + user.age + ' years old | Retorno da função APÓS esperar os 2 segundos')
    console.log("=============================\n\n")
  });
  console.log("1° Retorno: "+JSON.stringify(returnedUser)+" | Retorno da função ANTES de esperar os 2 segundos")//retorno da função antes de esperar os 2 segundos
}
displayUser()

