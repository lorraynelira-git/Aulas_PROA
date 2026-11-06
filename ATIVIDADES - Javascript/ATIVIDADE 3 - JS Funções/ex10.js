function fazerSaque(saldoAtual, valorDoSaque) {
    if (valorDoSaque > saldoAtual) {
        return "Saldo insuficiente";
    } else {
        let novoSaldo = saldoAtual - valorDoSaque;
        return `Saque realizado. Novo saldo: R$ ${novoSaldo}`;
    }
}
console.log(fazerSaque(500, 200)); 
console.log(fazerSaque(100, 300)); 