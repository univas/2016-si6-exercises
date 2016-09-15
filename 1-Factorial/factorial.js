(function showResult(){
    var a = getNumber();
    console.log("The factorial of "+a+" is: "+ factorial(a));
})();

function getNumber(){
    return process.argv[2]
}

function factorial(x){
    if(x == 1) {
        return 1;
    }
    return x * factorial(x-1);
}