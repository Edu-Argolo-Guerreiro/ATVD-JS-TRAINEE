const array = []; // Não entendi como poderia fazer essa questão <<<<<<<<<

function adicionarElemento(elemento) {
    array.push(elemento);
}

function removerUltimoElemento() {
    if (array.length > 0) {
        const elementoRemovido = array.pop();
    }
}

function removerPrimeiroElemento() {
    if (array.length > 0) {
        const elementoRemovido = array.shift();
    }
}

function exibirElementos() {
    if (array.length > 0) { 
    }
}
