let bateria = 100;

while (bateria > 0) {
  if (bateria === 100) {
    console.log("Bateria 100%");
  } else if (bateria <= 20 && bateria > 0) {
    console.log("Bateria fraca " + bateria + "%");
  } else {
    console.log("Bateria: " + bateria + "%");
  }
  bateria -= 20;
}

console.log("Celular desligado!");