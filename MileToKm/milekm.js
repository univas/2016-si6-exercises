function showResult(){
    var number = getNumber();
	if(isNaN(number)) console.log("Informe um numero");
	else console.log("Resultado " + converteMileToKm(number));
};
showResult();



function getNumber() {
    var number = getArguments()
               
    return stringToNumber(number);
}

function stringToNumber(stringNumber){
    return parseFloat(stringNumber);
}

function converteMileToKm(number){
    if(number == 0) return 0;
    
    var km = number;
    var miles = km / 0.62137
 
    return miles;
}

function getArguments(){
    return process.argv[2];
}