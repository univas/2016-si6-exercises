(function showResult() {
    var weight = getWeight();
    var height = getHeight();
    
    if(isNumber(weight) && isNumber(height)){
        console.log("BMI: " + calcBMI(weight,height));
    }else{
        console.log("Please enter valid numbers!!");
    }

})();

function getWeight() {
    return process.argv[2];
}

function getHeight() {
    return process.argv[3];
}

function isNumber(value) {
    return !isNaN(value);
}

function calcBMI(weight, height) {
    var result = weight / (height*height);
    return result;
}