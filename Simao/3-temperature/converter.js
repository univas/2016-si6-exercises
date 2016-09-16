var far = parseFloat(process.argv[2]);
var celcius;

function convert(farenheit){
    celcius = (far-32)/1.8;
    console.log(far + " °F é igual a " + celcius + " °C.");
}

convert(far);