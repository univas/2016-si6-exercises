showResult();

function showResult() {
    var a = getA();
    var b = getB();
    var bmi = calculator(a,b);
    if(!isNaN(bmi))
        console.log("BMI: " + bmi);
}

function calculator(a, b) {
    if(a>b){
        weight = a;
        height = b;
    }else{
        weight = b;
        height = a;
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