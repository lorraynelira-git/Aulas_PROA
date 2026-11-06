let idadeParaVoto = 71;

if (idadeParaVoto < 16) {
  console.log("Não pode votar.");
} else if (
  (idadeParaVoto >= 16 && idadeParaVoto <= 17) ||
  idadeParaVoto >= 70
) {
  console.log("Voto opcional");
} else if (idadeParaVoto >= 18 && idadeParaVoto < 70) {
  console.log("Voto obrigatório");
} else {
  console.log("Algo deu errado, tente novamente!");
}
