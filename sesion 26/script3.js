var frase ="esta es la locate que esta en el locate12";
var expreg = /locate[0-9]/
var index = frase.search(expreg);

document.getElementById("demo").innerHTML=index;