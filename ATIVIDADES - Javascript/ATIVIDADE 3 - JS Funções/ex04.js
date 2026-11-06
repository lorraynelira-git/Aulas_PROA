function verificarMaioridade(idade) {
    if (idade >= 18) {
        return "Maior";
    } else {
        return "Menor";
    }
}
console.log(verificarMaioridade(20)); 