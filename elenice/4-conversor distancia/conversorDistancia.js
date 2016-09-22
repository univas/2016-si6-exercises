function obterDistanciaMilhas() {
    return parseFloat(process.argv[2]);
}

function conversorDistancia(milhas) {
    if (isNumber(milhas)) {
        return milhas / 0.62137;
    }else{
        return "Erro: infome um número válido!"
    }
}

function isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}
console.log(conversorDistancia(obterDistanciaMilhas()));