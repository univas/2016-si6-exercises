(function showResult(){
    var m = getMiles();
    
    if(!m) {
        console.log("Please insert a NUMBER instead a char or string.");
        return;
    }
    
    
    console.log(m + " Miles is equals to " + 
                    convertToKilometers(m).toFixed(2)
                + " kilometers.");    
})();

function convertToKilometers(m){
    return m / 0.62137;
}

function getMiles(){
    var m = process.argv[2];
    
    if(!validateInput(m)) return false;
    return m;
}

function validateInput(n){
   if(isNaN(n)){
       return false;
   }
   return true;
}