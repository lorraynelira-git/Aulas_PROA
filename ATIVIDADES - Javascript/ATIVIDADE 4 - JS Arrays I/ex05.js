const livros = ["Harry Potter", "Senhor dos Anéis", "Nárnia"];
const posicao = livros.indexOf("Nárnia");
if (posicao !== -1) {
    console.log(`O livro está na posição ${posicao} .`);
} else {
    console.log("Livro não encontrado .");
}
