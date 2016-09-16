var mile = parseFloat(process.argv[2]);
var km;

function convert(miles){
    km = mile/0.62137;
    console.log(mile + " milhas são iguais a " + km.toFixed(2) + " quilômetros.");
}

convert(mile);