var num = getNumber();
    console.log("Result: " + calc(num));


function getNumber() {
    var number = getArgument()
                 .filter(isNumber)
                 .map(stringToNumber);
    return number;
}           


function isNumber(value) {
    return !isNaN(value);
}

function stringToNumber(string) {
    return parseFloat(string);
}

function getArgument() {
    return process.argv[2];
}

function calc(num) {
    var total = 1;
    
    while(num > 0){
        total *= num;
        num--;
    }
    
    return total;
   
}