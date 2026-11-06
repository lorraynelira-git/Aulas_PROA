// Switch case - usado quando quero comparar vários valores
// em uma mesma variável

let estado = prompt("Digite a sigla do estado: ");

switch (estado.toUpperCase()) {
  case "SP":
    alert("Estado de São Paulo");
    break;
  case "RJ":
    alert("Estado do Rio de Janeiro");
  case "MG":
    alert("Estado de Minas Gerais");
    break;
  case "BA":
    alert("Estado da Bahia");
    break;
  default:
    alert("Algo deu errado!");
    break;
}