(function showResult(){
    var fahreiheit = getFahreiheit();
    
    if(!fahreiheit) {
        console.log("Please insert a NUMBER instead a char or string.");
        return;
    }
    
    console.log("The result of conversion is: " + 
        convertToCelsius(fahreiheit).toFixed(2)
    );    
})();

function convertToCelsius(fahreiheit){
    return ((fahreiheit-32) / 1.8);
}

function getFahreiheit(){
    var fahreiheit = process.argv[2];
    
    if(!validateInput(fahreiheit)) return false;
    
    return f;
}


function validateInput(number){
   if(isNaN(number)){
       return false;
   }
   return true;
}