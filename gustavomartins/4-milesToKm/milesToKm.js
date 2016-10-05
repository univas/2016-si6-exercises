function getMiles (){
    var miles = process.argv[2];
    showMiles(conversion(miles));
}

function showMiles (miles){
    console.log("KM: " + miles.toFixed(5));
}

function conversion(miles) {
    return miles/0.62137;
}

// init
getMiles();