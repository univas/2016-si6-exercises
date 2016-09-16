showResult();

function showResult() {
    var fahrenheit = getFahrenheit();
    if (isNaN(fahrenheit)) console.log("O valor informado é inválido.");
    else console.log("Fatorial: " + parseFloat(convertToCelsius(fahrenheit).toFixed(2)));
}

function getFahrenheit() {
    var temp = getArgument()
    return parseFloat(temp);
}

function convertToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}

function getArgument() {
    return process.argv[2];
}