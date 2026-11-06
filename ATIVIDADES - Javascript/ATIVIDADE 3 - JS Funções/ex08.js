function aplicarDesconto(precoOriginal, porcentagemDesconto) {
    let valorDesconto = precoOriginal * (porcentagemDesconto / 100);
    return precoOriginal - valorDesconto;
}
console.log(aplicarDesconto(100, 20));