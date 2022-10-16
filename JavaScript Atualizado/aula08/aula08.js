let n1,n2,res
n1=10//00001010 - bin
n2=11//00001011 - bin

res=n1&n2//Faz operação AND bit por bit de 10(00001010) e 11(00001011)

console.log(res)

res=n1|n2//Faz operação OR bit por bit de 10(00001010) e 11(00001011)

console.log(res)

res=n1>>1//Desloca todos os bits em 1 slot para a direita - Reduz o número para a sua metade

console.log(res)

res=n1<<1//Desloca todos os bits em 1 slot para a esquerda - Dobra o número

console.log(res)

res=n1^n2//Faz operação XOR bit por bit de 10(00001010) e 11(00001011)

console.log(res)