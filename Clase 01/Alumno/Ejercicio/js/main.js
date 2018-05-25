//var persona = prompt("Ingrese nombre");
//alert('¡Hola ' + persona + '!');
//console.log('¡Hola ' + persona + '!');

//Diferentes formas de presear un valor
//parserInt("3") es la forma correcta
//+3 es otra forma


var number1 = prompt("Ingresa un número");
var number1Parser = parseInt(number1);
var number2 = 3;
var number3 = 1;
var number4 = prompt("Ingresá otro número");
var number4Parser = parseInt(number4);
console.log('Si al número que cargaste (' + number1 + ') le sumás "3", el resultado es: ' + (number1Parser + number2));
console.log('Si al número que cargaste (' + number1 + ') le restás "1", el resultado es: ' + (number1Parser - number3));
console.log('Si al número que cargaste primero (' + number1 + ') le sumás el número que cargaste segundo (' + number4 + '), el resultado es: ' + (number1Parser + number4Parser));
