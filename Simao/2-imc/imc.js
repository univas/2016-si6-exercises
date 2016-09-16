var peso = parseFloat(process.argv[2]);
var altura = parseFloat(process.argv[3]);

function calcIMC(p, h){
    var imc = p/(h*h);
    console.log("IMC: " + imc)
}

calcIMC(peso, altura);