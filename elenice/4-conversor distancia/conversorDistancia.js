function obterDistanciaMilhas() {
    return parseFloat(process.argv[2]);
}

function conversorDistancia(milhas) {
    return milhas/0.62137;
}
console.log(conversorDistancia(obterDistanciaMilhas()));