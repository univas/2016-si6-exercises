console.log("Resultado Fatorial: " + calcFatorial(getNumber()));

function getNumber() {
    return process.argv.slice(2);
}

function calcFatorial(number) {
    var fatorial = 1;
    for(var i = number; i>=1; i--) {
        fatorial = i * fatorial; 
    }
    return fatorial;
}


