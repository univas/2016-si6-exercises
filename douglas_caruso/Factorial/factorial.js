showResult();

function showResult() {
    var numero = getNumber();
    console.log("Resultado: " + fatorial(numero));
}

function fatorial(number) {
   if(number-1!=0){
       result = number * fatorial(number-1);
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
    return parseFloat(stringNumber);
}

function getArguments(params) {
    return process.argv.slice(2);
}