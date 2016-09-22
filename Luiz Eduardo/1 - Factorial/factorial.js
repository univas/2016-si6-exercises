

function getNumber() {
    return process.argv[ 2 ];
}



function factorial(number) {
    if(number === 1 || number === 0){
        return 1;
    }else{
        return (factorial(number - 1) * number);
    }
}




function showResult(result) {
    console.log("Resultado:" + result);
}



function showTime() {
    showResult(factorial(getNumber()));
}



showTime();