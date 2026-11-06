let saque = 130;

while (saque > 0) {

    if (saque >= 50) {
        saque = saque - 50;
        console.log("Nota de R$ 50 entregue");

    } else if (saque >= 20) {
        saque = saque - 20;
        console.log("Nota de R$ 20 entregue");

    } else if (saque >= 10) {
        saque = saque - 10;
        console.log("Nota de R$ 10 entregue");
    }
}