console.log("Temperatura em graus Celcius = " + convertsTemp(getTemp()));

function getTemp() {
    return process.argv[2];
}

function convertsTemp(tempFahreiheit) {
    return (tempFahreiheit - 32) / 1.8;
}

