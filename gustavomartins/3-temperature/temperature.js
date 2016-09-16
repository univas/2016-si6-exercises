function getTemperature (){
    var fahrenheit = process.argv[2];
    showTemperature(conversion(fahrenheit));
}

function showTemperature (fahrenheit){
    console.log("Celsius: " + fahrenheit.toFixed(5));
}

function conversion(fahrenheit) {
    return (fahrenheit-32)/1.8;
}

// init
getTemperature();