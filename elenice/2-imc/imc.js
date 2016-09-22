function obterPeso() {
    return process.argv[2];
}

function obterAltura() {
    return process.argv[3];
}

function isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function calcularIMC(peso, altura) {
    if (isNumber(peso) && isNumber(altura)) {
        return peso / (altura * altura);
    } else {
        return "Erro: Infome peso e altura válidos!"
    }
}

console.log(calcularIMC(obterPeso(), obterAltura()));

