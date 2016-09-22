console.log("Resultado Fatorial: " + calcFatorial(getNumber()));

function getNumber() {
    return convertType(process.argv[2]);
}

function convertType(value) {
    return parseFloat(value);
}

function calcFatorial(number) {
    var fatorial = 1;
    for(var i = number; i>=1; i--) {
        fatorial = i * fatorial; 
    }
    return fatorial;
}


