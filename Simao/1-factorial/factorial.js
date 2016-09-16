var number = parseFloat(process.argv[2]);

function calcFactorial(num) { 
           
        for(var i = num-1; i > 1; i--){
        num = num * i;
    }  
    console.log("FATORIAL:" + num);
}

//init
calcFactorial(number);