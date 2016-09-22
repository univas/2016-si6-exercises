showResult();

function showResult() {
    var number = getNumber();
    if (isNaN(number)) console.log("Informe um número.");
    else console.log("Fatorial: " + calculate(number));
}

function getNumber() {
    var number = getArgument()
    return parseInt(number);
}

function calculate(number) {
    if (number == 0) return 0;
    var fatorial = 1;
    for (var i = number; i > 0; i--) fatorial = fatorial * i;
    return fatorial;
}

function getArgument() {
    return process.argv[2];
}