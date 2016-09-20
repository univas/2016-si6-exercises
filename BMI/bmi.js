function showResult() {
    var peso = getNumber(2);
    var altura = getNumber(3);
	if(isNaN(peso)) {
        console.log("Informe um numero para peso");
    } else if(isNaN(altura)) {
        console.log("Informe um numero para altura");
    } else {
        console.log("Resultado " + calcularBMI(peso, altura));
    }
};
showResult();

function getNumber(indice) {
    var number = getArguments(indice)
    return stringToNumber(number);
}

function stringToNumber(stringNumber) {
    return parseFloat(stringNumber);
}

function calcularBMI(peso, altura) {
    return peso / (altura * altura);
}

function getArguments(indice) {
    return process.argv[indice];
}