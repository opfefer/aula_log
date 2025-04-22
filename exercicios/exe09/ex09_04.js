//Crie a função Divisao que recebe 2 números e calcula seu resultado
function divisao(n1, n2, operador) {
    let resultado;

    switch (operador) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            if (n2 !== 0) {
                resultado = n1 / n2;
            } else {
                return console.log("Erro: divisão por zero.");
            }
            break;
        case "**":
            resultado = n1 ** n2;
            break;
        default:
            return console.log("Operador inválido.");
    }

    console.log(`${n1} ${operador} ${n2} = ${resultado}`);
}
divisao(2, 5, "*");
divisao(10, 3, "+");
divisao(4, 2, "**");