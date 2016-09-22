function factorial(num)
{
    
    if (num < 0) {
        return -1;
    }
    
    else if (num == 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
}

var result = factorial(8);
document.write(result);