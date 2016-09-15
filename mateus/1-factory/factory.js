
function isNumber(value) {
   return !isNaN(value);
}

function getNumber(){
    var number = process.argv[2];;
    
    //if(IsNumber(number))
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
    console.log(calcFatorial(getNumber()));
})();

  
