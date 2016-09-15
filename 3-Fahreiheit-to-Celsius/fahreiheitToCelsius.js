(function showResult(){
    var f = getFahreiheit();
    
    if(!f) {
        console.log("Please insert a NUMBER instead a char or string.");
        return;
    }
    
    console.log("The result of conversion is: " + 
        convertToCelsius(f)
    );    
})();

function convertToCelsius(f){
    return ((f-32) / 1.8).toFixed(2);
}

function getFahreiheit(){
    var f = process.argv[2];
    
    if(!validateInput(f)) return false;
    
    return f;
}


function validateInput(n){
   if(isNaN(n)){
       return false;
   }
   return true;
}