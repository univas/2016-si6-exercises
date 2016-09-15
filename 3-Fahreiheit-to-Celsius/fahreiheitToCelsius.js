(function showResult(){
    console.log("The result of conversion is: " + 
        convertToCelsius(getFahreiheit()).toFixed(2)
    );    
})();

function convertToCelsius(f){
    return (f-32) / 1.8;
}

function getFahreiheit(){
    return process.argv[2];
}