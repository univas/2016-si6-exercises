function obterNumero() {
    return parseFloat(process.argv[2]);
}

function calcularFactorial(numero) {
    var i = 1;
    var fat = 1;
    
    while( i <= numero ){
        var fat = fat * i;
            i += 1;
    }
   return fat;
}
console.log(calcularFactorial(obterNumero()));
