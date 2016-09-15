var m = process.argv[2];

var k = convertToKilometers(m);

console.log(m + " Miles is equals to " + k.toFixed(2) + " kilometers.");

function convertToKilometers(m){
    return m / 0.62137;
}