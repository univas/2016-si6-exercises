var number = parseFloat(process.argv[2]);

    for(var i = number-1; i > 1; i--){
        number = number * i;
    }
   console.log("FATORIAL: " + number);