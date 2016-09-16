
(function showResult(){
    var numberFat = pegaNumeroFat();
    console.log("Fatorial"+  (numberFat) );
})
  ();
// vai mostrar o resultado da fatorial


function pegaNumero(){
    
    var numberFat = getArguments()
    .map(stringToNumeroFat);
    
    return numberFat;
}
//vai pegar o numero

function stringToNumero(stringNumberFat){
    return parseFloat(stringNumberFat);
    
}
//vai parsear trasformando string que foi digitada para numero 


function getArguments(){
    return process.argv.slice(2);
}

// vai pegar os argumentos do console


function calculaFatorial(numberFat){
var i =0;
for ( i = numberFat; i< numberFat; i--){
    number = numberFat*i;
};
//vai calcular o fatorial

return numberFat;
} 
//vai retornar o numero fatorado