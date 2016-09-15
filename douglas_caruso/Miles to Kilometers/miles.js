showResult();

function showResult() {
    var number = getNumber();
    if(!isNaN(number)){
        var result = convert(number);
        console.log("Kilometers: " + result);
    }else{
        console.log("Valor informado é invalido");
    }
}

function convert(miles) {
    var kilometers = miles / 0.62137;
    return kilometers;
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