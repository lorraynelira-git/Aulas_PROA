 {
  let notas = [10, 8, 6, 4, 2, 3];

  const notasAprovadas = notas.filter((nota) => {
    return nota >= 7;
  });

  console.log(notasAprovadas);
};
