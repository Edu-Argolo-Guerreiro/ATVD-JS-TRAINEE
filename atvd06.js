const idade = Number(prompt("Qual é a sua idade?"));

function filme(idade, ingresso) {
    return idade >= 18 || (idade >= 16 && ingresso === "Meia");
}

const podeAssistir = filme(idade, "Meia");
console.log(podeAssistir);