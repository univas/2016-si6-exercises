function obterPeso() {
    return process.argv[2];
}

function obterAltura() {
    return process.argv[3];
}
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

console.log(calcularIMC(obterPeso(), obterAltura()));

