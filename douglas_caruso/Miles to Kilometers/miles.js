showResult();

function showResult() {
    var number = getNumber();
    console.log("Kilometers: " + convert(number));
}

function convert(miles) {
    var kilometers = miles / 0.62137;
    return kilometers;
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