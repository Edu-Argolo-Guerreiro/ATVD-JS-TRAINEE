function calcular(operacao, operando1, operando2) {
    let resultado;

    switch (operacao) {
        case "soma":
            resultado = operando1 + operando2;
            console.log(`Resultado da soma: ${operando1} + ${operando2} = ${resultado}`);
            break;
        case "subtração":
            resultado = operando1 - operando2;
            console.log(`Resultado da subtração: ${operando1} - ${operando2} = ${resultado}`);
            break;
        case "multiplicação":
            resultado = operando1 * operando2;
            console.log(`Resultado da multiplicação: ${operando1} * ${operando2} = ${resultado}`);
            break;
        case "divisão":
            resultado = operando1 / operando2;
            console.log(`Resultado da divisão: ${operando1} / ${operando2} = ${resultado}`);
            break;
    }
}