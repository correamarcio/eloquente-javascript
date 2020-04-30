// Triangulo com Loop
var triangulo = "#";
do {
  console.log(triangulo);
  triangulo += "#";
} while (triangulo.length < 8);

//FizzBuzz
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i != 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0 && i != 0) {
    console.log("Fizz");
  } else if (i % 5 === 0 && i != 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Tabuleiro em xadrex
var eixoX = "# # # # \n";
var eixoY = " # # # #\n";
var size = 8;
var valor = "";
var xadrez = "";
for (let i = 0; i <= size; i++) {
  if (valor == eixoY) {
    xadrez += eixoX;
    valor = eixoX;
  } else {
    valor = eixoY;
    xadrez += eixoY;
  }
}
console.log(xadrez);
