const atividade1 = () => {
  const elementoNovo = document.createElement("h1");

  elementoNovo.setAttribute("id", "titulo");
  elementoNovo.textContent = "Olá, Visitante!";
  elementoNovo.style.border = "1px solid red";

  document.body.appendChild(elementoNovo);
};

const atividade2 = () => {
  const paragrafo = document.createElement("p");
  paragrafo.textContent = "Aviso importante";
  paragrafo.style.color = "red";
  paragrafo.style.fontSize = "24px";
  paragrafo.style.border = "1px solid blue";

  document.body.appendChild(paragrafo);
};

const atividade3 = function () {
  const uninho = document.createElement("img");
  uninho.setAttribute(
    "src",
    "https://assets.st-note.com/img/1751606162-hWJoH8OiraVcFYszuZU6S5Gb.jpg?width=1200",
  );

  uninho.setAttribute("alt", "Fiat Uno Vermelho");
  document.body.append(uninho);
};

function atividade4() {
  const div = document.createElement("div");
  div.textContent = "Modo Escuro Ativado";
  div.style.color = "#fff";
  div.style.backgroundColor = "#000";

  document.body.appendChild(div);
}

const atividade5 = () => {
  let listaCompras = ["Maçã", "Manga", "Fiat Uno", "Caju", "uva", "Pitaia"];

  const ul = document.createElement("ul");

  document.body.appendChild(ul);

  listaCompras.forEach((elemento) => {
    const li = document.createElement("li");
    li.textContent = elemento;
    ul.appendChild(li);
  });
};

const atividade6 = () => {
  let produto = {
    nome: "Shampoo",
    preco: 20,
  };

  const div = document.createElement("div");
  div.setAttribute("id", "vitrine");

  div.innerHTML = `<h2> ${produto.nome} </h2> <p> ${produto.preco} </p>`;

  document.body.appendChild(div);
};

const atividade7 = () => {
    let propaganda = document.createElement("div");
    propaganda.id = "propaganda";
    propaganda.textContent = "Compre agora!";

    document.body.appendChild(propaganda);

    let anuncio = document.getElementById("propaganda");
    anuncio.remove();
};

const atividade8 = () => {
    for (let i = 0; i < 3; i++) {
        let senha = document.createElement("p");
        senha.className = "segredo";
        senha.textContent = "Senha123";

        document.body.appendChild(senha);
    }

    let senhas = document.querySelectorAll(".segredo");

    for (let i = 0; i < senhas.length; i++) {
        senhas[i].textContent = "*****";
    }
};

const atividade9 = () => {
    let fila = document.createElement("ul");
    fila.id = "fila";

    document.body.appendChild(fila);

    let cliente1 = document.createElement("li");
    cliente1.id = "cliente1";
    cliente1.textContent = "João";

    let cliente2 = document.createElement("li");
    cliente2.id = "cliente2";
    cliente2.textContent = "Maria";

    fila.appendChild(cliente1);
    fila.appendChild(cliente2);

    let vip = document.createElement("li");
    vip.textContent = "Cliente VIP";

    fila.insertBefore(vip, cliente2);
};

const atividade10 = () => {
    let painel = document.createElement("div");
    painel.id = "painel";

    document.body.appendChild(painel);

    let statusAntigo = document.createElement("div");
    statusAntigo.id = "statusAntigo";
    statusAntigo.textContent = "Pedido Pendente...";

    painel.appendChild(statusAntigo);

    let statusNovo = document.createElement("div");
    statusNovo.id = "statusNovo";
    statusNovo.className = "sucesso";
    statusNovo.textContent = "Pedido Entregue!";

    painel.replaceChild(statusNovo, statusAntigo);
};

atividade1();
atividade2();
atividade3();
atividade4();
atividade5();
atividade6();
atividade7();
atividade8();
atividade9();
atividade10();