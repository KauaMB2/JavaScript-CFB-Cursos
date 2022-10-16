let n1=1
let n2="1"
let n3=1
let n4=n1
console.log(n1==n2)
console.log(n1===n2)
console.log(n1===n3)
console.log(n1==n4)

if(navigator.userAgent.match(/Andoird/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)
	|| navigator.userAgent.match(/Opera Mini/i)
	|| navigator.userAgent.match(/IEMobile/i)
){
	console.log("Celular")
}else{
	console.log("PC")
}