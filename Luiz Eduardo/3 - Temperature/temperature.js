
// Conversão de Fahrenheit para Celsius: (F - 32) / 1,8

function getFahrenheitValue() {
    return process.argv[ 2 ];
}


function convertToCelsius(value) {
    return (value - 32) / 1,8;
}


function convertTemperature() {
    var fahrenheit = convertToCelsius(getFahrenheitValue());
    
    console.log("O valor convertido: "+fahrenheit);
}



convertTemperature();