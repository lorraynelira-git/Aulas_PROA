function ex01() {
    let titulo = document.createElement("h1");

    titulo.setAttribute("id", "titulo");
    titulo.textContent = "Olá, Visitante!";

    document.body.appendChild(titulo);
}