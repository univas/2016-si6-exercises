
(function showResult(){
    var number = pegaNumero();
    console.log("Fatorial"+  (numberFat) );
})
  ();
// vai mostrar o resultado da fatorial



function calculaFatorial(){


for (i = numberFat; i< numberFat; i--){
    number = number*i;
}
} 
//vai calcular o fatorial


function pegaNumero(){
    
    var number = getArguments()
    .map(stringToNumero);
    return number;
}
//vai pegar o numero

function stringToNumero(stringNumber){
    return parseFloat(stringNumber);
    
}
//vai parsear trasformando string que foi digitada para numero 


function getArguments(){
    return process.argv.slice(2);
}

// vai pegar os argumentos do console