function multiplicar(a,b){
    resultado =a*b
    return resultado;
}
var result = multiplicar(5,3)
console.log(result)

function split(a,b){
    resultado =a/b
    return resultado;
}
var result = split(20,5)
console.log(result)

function suma(a,b){
    resultado =a+b
    return resultado;
}
var result = suma(8,4)
console.log(result)

function calcularPrecio(precio,descuento){
    montodescuento = precio*descuento/100
    precioFinal= precio-montodescuento
    return precioFinal;
}
var precioFinal = calcularPrecio(120,40)
console.log(precioFinal)