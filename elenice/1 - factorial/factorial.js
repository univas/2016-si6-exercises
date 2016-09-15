function factorial(a) {
    var a = parseFloat(process.argv[2]);
    var i = 1;
    var fat = 1;
    
    while( i <= a ){
        var fat = fat * i;
            i += 1;
    }
   return "Factorial de " + a + ": " + fat;
}
console.log(factorial());
