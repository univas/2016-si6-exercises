showResult();

function showResult() {
    var imc = calculeIMC();
    if (!isNaN(imc)) console.log("IMC: " + parseFloat(imc.toFixed(2)));
}

function getParameters() {
    var params = getArguments();
    return params;
}

function calculeIMC() {
    var params = getParameters();
    var param1 = params[0];
    var param2 = params[1];
    if(isNaN(param1) || isNaN(param2)) {
        console("Os valores informados são inválidos.");
    } else {
        param1 = parseFloat(param1);
        param2 = parseFloat(param2);
        if (param1 < param2) {
            var aux = param1;
            param1 = param2;
            param2 = aux;
        }
        var imc = param1 / (param2 * param2);
        return imc;
    }
}

function getArguments() {
    return process.argv.slice(2);
}