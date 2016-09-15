

// Converter Milhas para Kilômetros: km: mi/0.62137
function getMilesValue() {
    return process.argv[ 2 ];
}


function convertToKilometers(miles) {
    return miles / 0.62137;
}


function convertDistance() {
    var kilometers = convertToKilometers(getMilesValue());
    
    console.log("O valor convertido: "+kilometers.toFixed(2));
}



convertDistance();
