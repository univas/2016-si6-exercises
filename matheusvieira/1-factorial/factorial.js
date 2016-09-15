(function showResult() {
    
    var num = stringToNumber(getNumber());
    
    if(isNumber(num)){
        console.log("Result: " + calc(num));
    }else{
        console.log("Please enter a number!");
    }

})();

    
function isNumber(value) {
    return !isNaN(value);
}

function stringToNumber(string) {
    return parseFloat(string);
}

function getNumber() {
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