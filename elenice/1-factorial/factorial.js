function obterNumero() {
    return parseFloat(process.argv[2]);
}

function isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function calcularFactorial(numero) {
    if (isNumber(numero)) {
        var i = 1;
        var fat = 1;
        while (i <= numero) {
            var fat = fat * i;
            i += 1;
        }
        return fat;
    }else{
        return "Erro: Informar número válido!"
    }
}

console.log(calcularFactorial(obterNumero()));
