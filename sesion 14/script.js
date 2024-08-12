var color = "verde"
var tamaño = "mediano"
var precio = 1000
var estacion = "verano"
var color = "rojo"
//Si el color es verde y el precio es menor o igual a 1000
//entonces lo compro, caso contrario no me compro
if(color == "verde" && precio <=1000){
    console.log("lo compro");
}else{
    console.log ("compro otra cosa");
}
//Si el tamaño es mediano o el color es verde lo compro,
//caso contrario me voy de viaje.
if(color =="verde" || tamaño == mediano){
    console.log("lo compro");
}else{
    console.log("me voy de viaje");
}
//Si la estacion es invierno o la estacion es otoño "lo compro"
//caso contrario ahorro el dinero
if(estacion == "invierno" || estacion == "otoño"){
    console.log("lo compro")
}else{
    console.log("ahorro el dinero")
}
//Si el tamaño es mediano o el precio es meno igual a 1000
//o el color es rojo entonces lo compro, caso contrario lo pongo en
//el banco.
if(tamaño == "mediano" || precio <= 1000 || color== "rojo"){
  console.log("lo compro")
}else{
    console.log("lo pongo en el banco")
}