{
  let filaBanco = ["Carlos", "Maria", "João"];
  filaBanco.unshift("Seu josé");
  let atendido = filaBanco.shift();
  console.log("Atendimento de hoje: " + atendido);
  console.log(filaBanco);
}