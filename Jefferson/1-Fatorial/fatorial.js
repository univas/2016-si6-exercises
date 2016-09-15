console.log("Resultado Fatorial: " + calcFatorial(process.argv[2]));

function calcFatorial(number) {
    var fatorial = 1;
    for(var i = number; i>=1; i--) {
        fatorial = i * fatorial; 
    }
    return fatorial;
}


