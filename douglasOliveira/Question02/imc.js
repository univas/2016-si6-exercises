function calcularIMC() {
    
    var peso = process.argv[2];
    var altura = process.argv[3];
    var imc = 0; 
       
    imc = (peso / (altura * altura));
    
    console.log ("Resultado: " + imc);
}

calcularIMC();