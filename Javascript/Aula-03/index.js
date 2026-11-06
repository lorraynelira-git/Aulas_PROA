// AND - && - As duas condições precisam ser verdadeiras
// para a condição inteira ser Verdadeira (true)

// V V = V
// V F = F
// F F = F
// F V = F

if (10 > 5 && 15 < 10) {
  alert("Verdadeiro");
}

// OR - || - A condição será verdadeira SE ao menos uma
// das condições for verdadeira

// V V = V
// V F = V
// F V = V
// F F = F

if (10 > 5 || 10 > 100) {
  alert("Verdadeiro com OR");
}