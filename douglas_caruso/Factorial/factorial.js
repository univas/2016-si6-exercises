showResult();

function showResult() {
    var number = getNumber();
    if(!isNaN(number)){
        var result = factorial(number);
        console.log(result);
    }else{
        console.log("Valor informado é invalido");
    }
}

function factorial(number) {
   if(number-1!=0){
       result = number * factorial(number-1);
   }else{
       result = number;
   }
   return result;
}

function getNumber(){
    var number = getArguments();
    number = stringToNumber(number);
    return number;
}

function stringToNumber(stringNumber) {
    return parseInt(stringNumber);
}

function getArguments(params) {
    return process.argv[2];
}