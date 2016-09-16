function getPeso (){
    return process.argv[2];
};

function getAltura (){
    return process.argv[3];
};

function showImc (number){
    var imc =  getPeso() / ( getAltura() * getAltura() );
    console.log("IMC: " + imc.toFixed(1));
}

// init
showImc();