let num=[10,20,30,40,50]
for(n of num){ //for if
	console.log(n)
}
console.log("\n\n")
for(n in num){ //for in
	console.log(num[n])
}
console.log("\n\n")
objs=document.getElementsByTagName("div")
for(n of objs){
	console.log(n)
}
for(n in objs){
	console.log(n)
}