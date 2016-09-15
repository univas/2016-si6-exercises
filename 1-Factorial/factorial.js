(function showResult(){
    var a = getNumber();
    
    if(!a){
        console.log("Please, insert a NUMBER instead a char or string.");
        return;
    }
  
    console.log("The factorial of "+a+" is: "+ factorial(a));
})();

function getNumber(){
    var n = process.argv[2];
    
    if(!validateInput(n)) return false;
    
    return n;
}

function factorial(x){
    if(x == 1) {
        return 1;
    }
    return x * factorial(x-1);
}

function validateInput(n){
   if(isNaN(n)){
       return false;
   }
   return true;
}