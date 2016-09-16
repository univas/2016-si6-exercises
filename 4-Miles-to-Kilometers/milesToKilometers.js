(function showResult(){
    var miles = getMiles();
    
    if(!miles) {
        console.log("Please insert a NUMBER instead a char or string.");
        return;
    }
    
    
    console.log(miles + " Miles is equals to " + 
                    convertToKilometers(miles).toFixed(2)
                + " kilometers.");    
})();

function convertToKilometers(miles){
    return miles / 0.62137;
}

function getMiles(){
    var miles = process.argv[2];
    
    if(!validateInput(miles)) return false;
    return miles;
}

function validateInput(number){
   if(isNaN(number)){
       return false;
   }
   return true;
}