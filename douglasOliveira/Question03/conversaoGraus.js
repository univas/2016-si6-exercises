function conversion() {
    
    var f = process.argv[2];
    
    var c = (f-32)/1.8;
    
    console.log ("A conversao de Fahrenheit para Celcius: " + c);
}

conversion();