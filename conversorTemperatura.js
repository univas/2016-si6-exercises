function conversorTemperatura(temperaturaFahrenheit) {
    var temperaturaFahrenheit = parseFloat(process.argv[2]);
    return (temperaturaFahrenheit - 32)/1.8;
}
console.log(conversorTemperatura());