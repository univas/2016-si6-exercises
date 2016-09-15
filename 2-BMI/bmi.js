(function showResult(){
    var h = getHeight();
    var w = getWeight();
    
    if(!h || !w) {
        console.log("One or more wrong values. Please, insert number intead char or string.");
        return;
    }
    
    console.log("Your Body Mass Index is: " +calculateBMI(h, w));
})();

function calculateBMI(h, w){
    return (w / (h*h)).toFixed(2);
}

function getHeight(){
    var h = process.argv[2]; 
    
    if(!validateInput(h)) return false;
    
    return h;
}

function getWeight(){
    var w = process.argv[3]
    
    if(!validateInput(w)) return false;
    
    return w;
}

function validateInput(n){
   if(isNaN(n)){
       return false;
   }
   return true;
}