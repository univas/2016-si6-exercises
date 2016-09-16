
function isNumber(value) {
   return !isNaN(value);
}

function getNumber(){
    var number = process.argv[2];
        return number;
}
function calcFatorial(value){
    var result = value;
    while(value > 1){
        result *= value - 1;
        value--;
    }
    return result;
}


(function showResult(){
   var number = getNumber();
    if(isNumber(number))
        console.log(calcFatorial(number));
    else
        console.log("Please! Input Valid Type!")
})();

  
