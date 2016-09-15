
(function showResult(){
    var number = pegaNumero();
    console.log("Fatorial"+  (number) );
})
  ();
// vai mostrar o resultado



function calculaFatorial(){


for (i = 0; i < number; number--){
    number = number*i;
}

}


function pegaNumero(){
    
    var number = getArguments()
    .map(stringToNumero);
    return number;
}


function stringToNumero(stringNumber){
    return parseFloat(stringNumber);
    
}
//vai parsear trasformando string que foi digitada para numero 


function getArguments(){
    return process.argv.slice(2);
}

// vai pegar os argumentos do console