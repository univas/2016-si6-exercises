function getNumber (){
    var number = process.argv.slice(2);
    showNumber(factorial(number));
}

function showNumber (number){
    console.log("Number: " + number);
}

function factorial(number) {
    for (var i=number; i > 1; i--) {
        number = number * (i - 1);
    }
    return number;
}

// init
getNumber();