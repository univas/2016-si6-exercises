var h = process.argv[2];
var w = process.argv[3];

var imc = calculateBMI(h, w);

console.log("Your Body Mass Index is: " +imc.toFixed(2));

function calculateBMI(h, w){
    return w / (h*h);
}