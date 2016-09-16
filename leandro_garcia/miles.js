showResult();

function showResult() {
    var km = convertToKm();
    if (isNaN(km)) console.log("O valor informado é inválido.");
    else console.log("KM: " + parseFloat(km.toFixed(2));
}

function getMiles() {
    var number = getArgument();
    return parseFloat(number);
}

function convertToKm() {
    var miles = getMiles();
    var km = miles / 0.62137;
    return km;
}

function getArgument() {
    return process.argv[2];
}