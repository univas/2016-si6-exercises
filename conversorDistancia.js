
function conversorDistancia(milhas) {
    var milhas = parseFloat(process.argv[2]);
    return milhas/0.62137;
}
console.log(conversorDistancia());