let pessoa = { nome: "Kaue", idade: 25, programador: true };

pessoa.nome = "Irineu";
pessoa.idade = 45;

// Criando nova propriedade no objeto
pessoa.casado = true;

// Excluindo propriedade no objeto
delete pessoa.casado;

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

// Posso atribuir métodos (funções) ao objeto
// A palavra reservada "this" refere-se
// Ao contexto do objeto
const usuario = {
  nome: "João",
  idade: 54,
  apresentar() {
    console.log(`Nome do usuário é ${this.nome}`);
    console.log(`Idade do usuário é ${this.idade}`);
  },
};

// Representando caracteristicas de um objeto e métodos
let computador = {
  monitor: true,
  SO: "Linux/Windows",
  gabinete: true,
  memoriaRam: 16,
  memoria: 512,
  mouse: true,
  ligarComputador() {
    console.log("Computador ligado");
  },
  abrirNavegador() {
    console.log("Abrindo navegador");
  },
  fazerDownloads() {
    console.log("fazendo downloads");
  },
};

// Desestruturação
// Pego as caracteristicas do objeto e salvo
// Em uma única variável

// let gabinete = computador.gabinete;
// let sistema = computador.SO;

const { monitor, gabinete, SO, fazerDownloads } = computador;

console.log(monitor);
console.log(gabinete);
console.log(SO);
fazerDownloads();

let guaraRoupa = {
  porta: 6,
  gavetas: 5,
  espelho: true,
  abrirPortas() {},
  fecharPortas() {},
  abrirGavetas() {},
  fecharGavetas() {},
};

// Object.keys(objeto) - me traz todas as chaves do objeto
console.log(Object.keys(guaraRoupa));

// Object.values(objeto) - me traz os valores das chaves do objeto
console.log(Object.values(guaraRoupa));

// Object.entries(objeto) - Traz todas as chaves e o valores
//  do objeto
console.log(Object.entries(guaraRoupa));

let lampada = {
  fabricante: "elgin",
  ligarLampada() {},
};

// Spread - espalhar as caracteristicas e métodos
// dos objetos em um outro objeto, sem alterar o original
const quarto = { ...computador, ...guaraRoupa, ...lampada };

console.log(quarto);