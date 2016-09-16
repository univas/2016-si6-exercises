showResult();

function showResult() {
    var numA = getA();
    var numB = getB();
    var bmi = calculator(numA,numB);
    if(!isNaN(bmi))
        console.log("BMI: " + bmi);
}

function calculator(numA, numB) {
    if(numA>numB){
        weight = numA;
        height = numB;
    }else{
        weight = numB;
        height = numA;
    }
    var bmi = weight / (height*height);
    return bmi;
}

function getA() {
    var weight = process.argv[2];
    if(!isNaN(weight)){
        weight = parseFloat(weight);
    }else{
        console.log("Not a number in field 1");
    }
    return weight;
}

function getB() {
    var height = process.argv[3];
    if(!isNaN(height)){
        weight = parseFloat(height);
    }else{
        console.log("Not a number in field 2");
    }
    return height;
}