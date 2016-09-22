function showResult(){
    var number = getNumber();
	if(isNaN(number)) console.log("Informe um numero");
	else console.log("Resultado " + fatorial(number));
};
showResult();



function getNumber() {
    var number = getArguments()
               
    return stringToNumber(number);
}

function stringToNumber(stringNumber){
    return parseFloat(stringNumber);
}

function fatorial(number){
    if(number == 0) return 0;
    
    var i = 1;
    var fat = 1;
   
    while( i <= number){
      fat = fat * i;
      i++;
     }
    return fat;
}

function getArguments(){
    return process.argv[2];
}