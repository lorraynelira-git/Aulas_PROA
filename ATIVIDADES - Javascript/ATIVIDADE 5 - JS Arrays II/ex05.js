 {
  let salarios = [1500, 2500, 3000, 1800];

  const salariosBaixos = salarios.filter((salario) => {
    return salario < 2000;
  });

  const salariosComBonus = salariosBaixos.map((salario) => {
    return salario + 500;
  });

  console.log(salariosComBonus);
};