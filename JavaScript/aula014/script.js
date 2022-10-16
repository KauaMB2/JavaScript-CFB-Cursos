var mochila=[];
mochila.push("Faca");// Adiciona um elemento no array
mochila.push("Corda");// Adiciona um elemento no array
mochila.push("Pederneira");// Adiciona um elemento no array
mochila.push("Chave");// Adiciona um elemento no array
mochila.push("Lanterna");// Adiciona um elemento no array
mochila.push("Pedra");// Adiciona um elemento no array
mochila.push("Espada");// Adiciona um elemento no array
mochila.push("Arma");// Adiciona um elemento no array
mochila.push("Escudo");// Adiciona um elemento no array
mochila.pop();//Tira o primeiro elemento do array(Faca)
mochila.shift();//Tira o último elemento do array(Escudo)
mochila.splice(2,1);//Remove o item 2 do array(Chave), somente 1 item a partir do item dois(2,1);
for(var i=0;i<mochila.length;i++){
	document.write(mochila[i] + "<br>");
}