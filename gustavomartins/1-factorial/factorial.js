function getNumber (){
    var number = process.argv.slice(2);
    showNumber(number);
}

function showNumber (number){
    console.log("Number: " + number);
}

// init
getNumber();