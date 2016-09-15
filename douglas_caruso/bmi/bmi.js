showResult();

function showResult() {
    var weight = getWeight();
    var height = getHeight();
    console.log(calculator(weight,height));
}

function calculator(weight, height) {
    var bmi = weight / (height*height);
    return bmi;
}

function getWeight() {
    var weight = process.argv[2];
    if(!isNaN(weight)){
        weight = parseFloat(weight);
    }else{
        console.log("Not a number in weight field");
    }
    return weight;
}

function getHeight() {
    var height = process.argv[3];
    if(!isNaN(height)){
        weight = parseFloat(height);
    }else{
        console.log("Not a number in height field");
    }
    return height;
}