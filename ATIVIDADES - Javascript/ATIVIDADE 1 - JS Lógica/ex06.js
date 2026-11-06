let ladoA = 10;
let ladoB = 1;
let ladoC = 3;

if (ladoA === ladoB && ladoB === ladoC) {
  console.log("Triângulo equilátero");
} else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
  console.log("Triângulo escaleno");
} else {
  console.log("Triângulo isósceles");
}
