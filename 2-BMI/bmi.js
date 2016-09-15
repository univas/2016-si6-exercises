(function showResult(){
    console.log("Your Body Mass Index is: " +calculateBMI(getHeight(), getWeight()).toFixed(2));
})();

function calculateBMI(h, w){
    return w / (h*h);
}

function getHeight(){
    return process.argv[2];
}

function getWeight(){
    return process.argv[3]
}