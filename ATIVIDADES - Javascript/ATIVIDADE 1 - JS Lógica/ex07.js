let numero1 = 10;
let numero2 = 0;
let operador = "/";

switch (operador) {
  case "+":
    console.log(numero1 + numero2);
    break;
  case "-":
    console.log(numero1 - numero2);
    break;
  case "*":
    console.log(numero1 * numero2);
    break;
  case "/":
    if (numero2 === 0 || numero1 === 0) {
      console.log("Erro: Não é possível dividir por zero!");
      break;
    } else {
      console.log(numero1 + numero2);
      break;
    }
}
