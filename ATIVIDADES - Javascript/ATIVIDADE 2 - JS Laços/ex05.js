let carga = 0;

while (carga <= 100) {
  carga += 30;
  if (carga > 100) {
    console.log("Limite atingido!");
    break;
  } else {
    console.log("Carga atual: " + carga + " kg.");
  }
}