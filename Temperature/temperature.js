function showResult(){
    var number = getNumber();
	if(isNaN(number)) console.log("Informe um numero");
	else console.log("Resultado " + convertTemperature(number));
};
showResult();



function getNumber() {
    var number = getArguments()
               
    return stringToNumber(number);
}

function stringToNumber(stringNumber){
    return parseFloat(stringNumber);
}

function convertTemperature(number){
   
    var grausF = number;
    var grausC = (grausF - 32) / 1.8;
 
    return grausC;

}

function getArguments(){
    return process.argv[2];
}