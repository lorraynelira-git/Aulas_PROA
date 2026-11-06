// Método mais longo
// i = indice
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// Método mais curto
// nums.forEach((n) => {
//   console.log(n);
// });

// outro exemplo
// nums.forEach((elemento, indice) => {
//   console.log("Número: ${elemento} Indice: ${indice}");
// });

let nomes = ["Lorrayne", "João", "Carlos", "Mayara", "Alice"];

// elemento, indice
nomes.forEach((elemento, indice) => {
  console.log(elemento);
});

// MAP
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// nums.map((elemento) => {
//   console.log(elemento * 2);
// });

// const nums2 = nums.map((nums) => nums * 2);
// console.log(nums2);

// for (let i = 0; i < nums.length; i++){
// console.log(nums[i] * 2);
// }

let idades = [18, 21, 20, 12, 15, 16];

// filter()
// Vai filtrar elementos do array
// De acordo com a condição e retornar um novo array
console.log(idades.filter((idades) => idade >= 18));
console.log(nums.filter((numero) => numero % 2 === 0));

// find()
// Traz somente o primeiro elemento que se encaixar na condição
console.log(idades.find((idade) => idade >= 18));

// reduca()
// Vai reduzir o array para um único valor

let numeros2 = [1, 2, 3, 4, 5];

// console.log(
//   numeros2.reduce((acumulador, valorAtual) => {
//     return acumulador + valorAtual;
//   }, 0),
// );

// ou
let reduzir = numeros2.reduce((acumulador, elemento) => {
  return acumulador + elemento;
}, 0);

console.log(reduzir);