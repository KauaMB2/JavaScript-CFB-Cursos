var tag1=document.getElementsByTagName("*");
tag1[8].innerHTML="NOVO TEXTO";
tag1[8].style.color="#f00";
var tag2=document.getElementsByTagName("p");
for(var i = 0; i<tag2.length; i++){
	tag2[i].style.color="#00f";
}