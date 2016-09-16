console.log("Índice de Massa Corporal (IMC) = " + calcIMC(getWeight(), getHeight()));

function getWeight() {
    return convertsNumber(process.argv[2]);
}

function getHeight() {
    return convertsNumber(process.argv[3]);
}

function convertsNumber(value) {
    return parseFloat(value);
}

function calcIMC(weight, height) {
    return weight / Math.pow(height, 2);
}