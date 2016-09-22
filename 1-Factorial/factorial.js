(function showResult(){
    var number = getNumber();
    
    if(!number){
        console.log("Please, insert a NUMBER instead a char or string.");
        return;
    }
  
    console.log("The factorial of "+number+" is: "+ factorial(number));
})();

function getNumber(){
    var number = process.argv[2];
    
    if(!validateInput(number)) return false;
    
    return number;
}

function factorial(number){
    if(number == 0) {
        return 1;
    }
    return number * factorial(number-1);
}

function validateInput(number){
   if(isNaN(number)){
       return false;
   }
   return true;
}