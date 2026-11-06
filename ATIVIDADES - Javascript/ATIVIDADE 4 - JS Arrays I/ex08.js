const notas =[5,8,4,9,7];
let quantidadeAprovados = 0;

for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 7) {
    quantidadeAprovados++;
  }
}

console.log(`Total de aprovados: ${quantidadeAprovados}`);