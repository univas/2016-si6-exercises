console.log("Distancia em Kilômetros = " + convertDistance(getDistance()));

function getDistance() {
    return convertType(process.argv[2]);
}

function convertType(value) {
    return parseFloat(value);
}

function convertDistance(distance) {
    return (distance / 0.62137).toFixed(2);
}