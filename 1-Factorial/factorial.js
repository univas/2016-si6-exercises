var a = process.argv[2];

var f = factorial(a);

console.log("The factorial of "+a+" is: "+ f);

function factorial(x){
    if(x == 1) {
        return 1;
    }
    return x * factorial(x-1);
}