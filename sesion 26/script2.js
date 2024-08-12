//ejercicio 1
//imprimir los numeros del 0 al 5
/*
var numero=0;

while(numero <=5){
    document.getElementById("resultado").innerHTML += numero + "<br>";
    numero = numero + 1;
}
*/
//Mostrar promt para capturar nombre

function nombre(){
    var nombre = prompt("Cual es tu nombre");
    document.getElementById("resultado").innerHTML=nombre;
}

