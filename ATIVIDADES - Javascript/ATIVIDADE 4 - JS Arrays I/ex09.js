const emailsCadastrados = ['admin@email.com', 'contato@email.com'];
const novoEmail = 'joao@email.com'; 

if (emailsCadastrados.includes(novoEmail)) {
  console.log('Erro: E-mail já cadastrado.');
} else {
  emailsCadastrados.push(novoEmail);
  console.log('Cadastro realizado com sucesso!');
  console.log(`Array: [ ${emailsCadastrados.join(', ')} ].`);
}