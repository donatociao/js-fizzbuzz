//creo un array vuoto che conterrà i numeri
var list = [];

//dichiaro index per il ciclo while
var i = 0;

//dichiaro var numeri per partire da 1
var numeri = 1;

while (i < 99) {
  //pusho il numero nella lista array
  list.push(numeri);

  //cerco i multipli di 5
  var modulo5 = (numeri % 5);

  //cerco i multipli di 3
  var modulo3 = (numeri % 3);

  //se numero è multiplo di 3 e di 5 scrivo FizzBuzz
  if (modulo5 == 0 && modulo3 == 0) {
    document.writeln("FizzBuzz</br>");

  //se è multiplo di 3 scrivo Fizz
  } else if  (modulo3 == 0) {
    document.writeln("Fizz</br>");

  //se è multiplo di 5 scrivo Buzz
  } else if (modulo5 == 0) {
    document.writeln("Buzz</br>");

  //in alternativa scrivo il numero
  } else {
    document.writeln(numeri + "</br>");
  }

  //incremento numero
  ++numeri;

   //incremento index
  ++i;
}
