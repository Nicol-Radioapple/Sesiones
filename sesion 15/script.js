//variables
var clima = 'nublado';

//Escructura Switch Case

switch (clima) {
    case 'lluvioso':
        console.log('Recuerda llevar un paraguas.');
      break;
      case 'soleado':
        console.log('Viste ligero.');
      break;
      case 'nublado':
        console.log('Sal a la calle.');
      break;
      default:
        console.log('Tipo de Clima desconocido.');
      break;
}

//si la fruta es manzana el precio es de S/.5
//si la fruta es platano el precio es de S/.2
//si la fruta es mango el precio es de S/.4
//si es cualquier otra fruta no se tiene esa fruta
var fruta = 'manzana'

//Escructura Switch Case

switch (fruta) {
  case 'manzana':
      console.log('S/5.');
    break;
    case 'platano':
      console.log('S/2.');
    break;
    case 'mango':
      console.log('S/4.');
    break;
    default:
      console.log("no se tiene esa fruta");
    break;
}

var diaSemana = 'Martes'

//Escructura Switch Case

switch (diaSemana) {
  case 'Lunes':
      console.log('se come sopa.');
    break;
    case 'Martes':
      console.log('se come aji de gallina.');
    break;
    case 'Miercoles':
      console.log('se come arroz con pollo.');
    break;
    case 'Jueves':
      console.log('se come carapulcra.');
    break;
    case 'Viernes':
      console.log('se come arroz con mariscos.');
    break;
    default:
      console.log("se come lentejas");
    break;
}