// Função de código que executa uma determinada ação

// function olaMundo(nome) {
//   alert("Ola " + nome);
// }

function soma(num1, num2) {
  return num1 + num2;
}

// Uma função pode ser armazenada em variáveis e constantes
let mult = function (x, y) {
  return x * y;
};

// Arrow function - função de seta - omitimos a palavra
// reservada "function" e adicinamos a seta "=>"
const div = (a, b) => {
  return a / b;
};

console.log(div(50, 5));
console.log(mult(10, 5));
console.log(soma(20, 30));