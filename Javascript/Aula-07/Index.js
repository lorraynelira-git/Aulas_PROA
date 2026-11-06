// Funçao é um determinado bloco de código que executa
// alguma coisa

function olaMundo() {
  alert("Hello World");
}

// Função com parâmetros - são variáveis
// que tonam a função dinâmica
function saudacao(nome) {
  alert("Olá " + nome);
}

function somar(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

// function mostrarResultado() {
//   let argumento1 = Number(prompt("Digite o múmero 1: "));
//   let argumento2 = Number(prompt("Digite o múmero 2: "));
//   alert(
//     "Soma: " +
//       somar(argumento1, argumento2) +
//       " e subtração: " +
//       sub(argumento1, argumento2),
//   );
// }

function mostrarResultado() {
  let argumento1 = Number(prompt("Digite o múmero 1: "));
  let argumento2 = Number(prompt("Digite o múmero 2: "));
  alert("Soma: " + somar(argumento1, argumento2));
}

function mostrarResultado() {
  let argumento1 = Number(prompt("Digite o múmero 1: "));
  let argumento2 = Number(prompt("Digite o múmero 2: "));
  alert("Soma: " + sub(argumento1, argumento2));
}