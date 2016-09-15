showResult();

function showResult() {
    var number = getNumber();
    console.log("Celsius: " + convert(number));
}

function convert(fahreiheit) {
    var celsius = (fahreiheit - 32) / 1.8;
    return celsius;
}

function getNumber(){
    var number = getArguments();
    if(!isNaN(number))
        number = stringToNumber(number);
    else
        console.log("Not a valid number");
    return number;
}

function stringToNumber(stringNumber) {
    return parseFloat(stringNumber);
}

function getArguments(params) {
    return process.argv[2];
}