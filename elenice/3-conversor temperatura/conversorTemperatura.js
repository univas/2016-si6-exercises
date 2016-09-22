function obterTemperaturaFahrenheit() {
    return parseFloat(process.argv[2]);
}

function conversorTemperatura(temperaturaFahrenheit) {
    return (temperaturaFahrenheit - 32) / 1.8;
}

console.log(conversorTemperatura(obterTemperaturaFahrenheit()));