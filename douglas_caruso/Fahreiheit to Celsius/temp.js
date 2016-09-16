showResult();

function showResult() {
    var number = getNumber();
    if(!isNaN(number)){
        var result = convert(number);
        result = parseFloat(result.toFixed(4));
        console.log("Celsius: " + result);
    }else{
        console.log("Valor informado é invalido");
    }
    
}

function convert(fahreiheit) {
    var celsius = (fahreiheit - 32) / 1.8;
    return celsius;
}

function getNumber(){
    var number = getArguments();
    number = stringToNumber(number);
    return number;
}

function stringToNumber(stringNumber) {
    return parseFloat(stringNumber);
}

function getArguments(params) {
    return process.argv[2];
}