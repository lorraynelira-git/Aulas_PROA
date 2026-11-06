{
  let velocidades = [60, 75, 82, 90, 65];

  const primeiroMultado = velocidades.find((velocidade) => {
    return velocidade > 80;
  });

  console.log(`Multa gerada para a velocidade: ${primeiroMultado}`);
};
