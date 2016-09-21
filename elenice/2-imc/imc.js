function calcularIMC(peso,altura) {
    var peso = parseFloat(process.argv[2]);
    var altura = parseFloat(process.argv[3]);
   
   return peso/(altura*altura);
}
console.log(calcularIMC());