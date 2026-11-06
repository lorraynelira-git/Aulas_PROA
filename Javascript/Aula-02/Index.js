// > - Maior
// < - Menor
// == - Igualdade
// === - Igualdade + tipo da variavel
// != - Diferente
// !== - Diferença + tipo da variável

// let idade = Number(prompt("Digite sua idade: "));

// Somente será executado o comando SE a condição for verdadeira
// O else somente será executado SE a condição for falsa
// if (idade >= 18) {
//   alert("Você é maior de idade!");
// } else {
//   alert("Você é menor de idade.");
// }

// Dia da semana

let diaDaSemana = prompt("Digite o dia da semana");

// let idade = prompt("Digite sua idade:");

// Operador ternário
// condição ? seForVerdadeiro : seForFalso
// alert(idade >= 18 ? "Maior de idade" : "Menor de idade");

// toLowerCase() - Método que transforma toda a string em minusculo
// toUpperCase() - Método que transforma toda a string em maiúscula

if (diaDaSemana.toLowerCase() == "segunda") {
  alert("Hoje é dia de Kahoot");
} else if (diaDaSemana.toLowerCase() == "terca") {
  alert("Hoje veremos Harry Potter");
} else if (diaDaSemana.toLocaleLowerCase() == "quarta") {
  alert("Veremos laços de repetição");
} else {
  alert("Algo deu errado!");
}