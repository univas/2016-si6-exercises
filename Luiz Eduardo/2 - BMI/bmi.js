
// Cálculo do indice de massa corporal: IMC: Peso / (altura * altura)


function healthCalculation() {
     var weight = process.argv[ 2 ];
     var height = process.argv[ 3 ];
     
     showResult(bmiCalc(weight, height));
}



function bmiCalc(weight, height) {
    return weight / (height * height); 
}


function showResult(bmi) {
    console.log("Seu Indice de Massa Corporal: "+ bmi.toFixed(2));
}



healthCalculation();