displayResult();

function displayResult() {
    if(isNaN(convertType(getNumber())) == false) {
        var number = convertType(getNumber());
        console.log("Resutado Fatorial: " + calcFatorial(number));
    }
    else {
        console.log("O número digitado é inválido! Tente novamente.")
    }
}

function getNumber() {
    return process.argv[2];
}

function convertType(value) {
    return parseFloat(value);
}

function calcFatorial(number) {
    fatorial = 1;
    for(var i = number; i>=1; i--) {
        fatorial = i * fatorial; 
    }
    return fatorial;
}


