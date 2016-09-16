(function showResult(){
    var height = getHeight();
    var weight = getWeight();
    
    if(!height || !weight) {
        console.log("One or more wrong values. Please, insert number intead char or string.");
        return;
    }
    
    console.log("Your Body Mass Index is: " +calculateBMI(height, weight).toFixed(2));
})();

function calculateBMI(height, weight){
    return weight / (height*height);
}

function getHeight(){
    var height = process.argv[2]; 
    
    if(!validateInput(height)) return false;
    
    return height;
}

function getWeight(){
    var weight = process.argv[3]
    
    if(!validateInput(weight)) return false;
    
    return weight;
}

function validateInput(number){
   if(isNaN(number)){
       return false;
   }
   return true;
}