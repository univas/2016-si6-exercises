function calcularFatorial() {

    var number = process.argv.slice(2);
    console.log("Number " + number);
    var x = 1;
    var result = 1;
        
    while (x <= number) {
        result = result * x;
        x++;
    }
    
    console.log("Factorial: " + result);
}

// init
calcularFatorial();