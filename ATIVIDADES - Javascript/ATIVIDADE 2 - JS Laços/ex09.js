let numero = 1;

while (true) {

    if (numero % 5 === 0 && numero % 7 === 0) {
        console.log("O primeiro múltiplo comum é: " + numero);
        break;
    }

    numero++;
}