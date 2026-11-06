// Array é uma variavel que
// armazena diversos dados

// Arrays iniciam sempre no indice 0
let numeros = [1, 2, 3, 4, 5];
let nomes = ["Ana", "Maria", "João"];

// .lenght - retorna o tamanho do array
console.log(nomes.length);

// push() - adiciona o elemento no fim do array
nomes.push("Gustavo");

// pop() - remove o ultimo elemento do array
nomes.pop();

console.log(nomes);

// unshift() - Adiciona valores no inicio do array
nomes.unshift("Ryan - Giovanni");

// shift() - remove o primeiro elemento do array
console.log(nomes.shift());

console.log(nomes);

// includes() - Verifica se existe o elemento no array
// retorna true ou false
console.log(nomes.includes("Ana"));

// indexOf() - retorna o indice especifico
// de determinado elemento. Retorna -1 se não achar.
console.log(nomes.indexOf("Ana"));

// slice() - copia o array sem modificar o original
console.log(numeros.slice(0, 2));

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}