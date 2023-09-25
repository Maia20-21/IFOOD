function soma(num1, num2) {
  const value = num1 + num2;
  console.log('soma', value)
}

function subtracao(num1, num2) {
  const value = num1 - num2;
  console.log('subtracao', value)      // return value 
} 

function multiplicacao(num1, num2) {
  const value = num1 * num2;
  console.log('multiplicacao', value)
}

function divisao(num1, num2) {
  const value = num1 / num2;
  console.log('divisao', value);
}

function contarDigitos(numero) {
  const numeroString = numero.toString();
  const tamanhoDoNumero = numeroString.lenght;
  console.log('contarDigitos', tamanhoDoNumero);
}

function converterCelsiusParaFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  console.log('fahrenheit', fahrenheit)
}

function calcularPerimetroRetangulo(comprimento, largura) {
  const perimetro = 2 * (comprimento + largura);
  console.log('calcularPerimetroRetangulo', perimetro)
}


soma (2,4);
subtracao(5,2);
multiplicacao(5,5);
divisao(10,20);
contarDigitos(123456);
converterCelsiusParaFahrenheit(32);
calcularPerimetroRetangulo(5,3);