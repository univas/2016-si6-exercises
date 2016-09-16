(function showResult() {
    var fahreiheit = getFahreiheit();
    
    if (isNumber(fahreiheit)) {
        console.log("Graus Celsius: " + calc(fahreiheit))
    }else{
        console.log("Please enter a number")
    }   

})();

function getFahreiheit() {
    return process.argv[2];
}

function isNumber(value) {
    return !isNaN(value);
}

function calc(fahreiheit) {
    
    var resul = (fahreiheit - 32)/ 1.8;
    
    return resul;
}