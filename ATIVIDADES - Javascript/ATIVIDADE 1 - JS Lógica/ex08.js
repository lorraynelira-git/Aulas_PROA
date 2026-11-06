let peso = 30;
let altura = 1.57;
let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
  console.log("Abaixo do peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("Sobrepeso");
} else if (imc >= 30) {
  console.log("Obesidade");
} else {
  console.log("Algo deu errado, tente novamente!");
}
