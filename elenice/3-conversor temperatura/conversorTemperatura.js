function obterTemperaturaFahrenheit() {
    return parseFloat(process.argv[2]);
}

function isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function conversorTemperatura(temperaturaFahrenheit) {
    if (isNumber(temperaturaFahrenheit)) {
        return (temperaturaFahrenheit - 32) / 1.8;
    }else{
        return "Erro: Informe temperatura válida!"
    }
}

console.log(conversorTemperatura(obterTemperaturaFahrenheit()));