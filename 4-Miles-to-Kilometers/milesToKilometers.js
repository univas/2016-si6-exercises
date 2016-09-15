(function showResult(){
    var m = getMiles();
    console.log(m + " Miles is equals to " + 
                    convertToKilometers(m).toFixed(2)
                + " kilometers.");    
})();


function convertToKilometers(m){
    return m / 0.62137;
}

function getMiles(){
    return process.argv[2];
}