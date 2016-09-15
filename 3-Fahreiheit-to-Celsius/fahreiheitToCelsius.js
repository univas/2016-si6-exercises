var f = process.argv[2];

var c = convertToCelsius(f);

console.log("The result of conversion is: " + c.toFixed(2));

function convertToCelsius(f){
    return (f-32) / 1.8;
}