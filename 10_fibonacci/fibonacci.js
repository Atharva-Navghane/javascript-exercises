//let ctr = 1;
const fibonacci = function(a) {
    if(a >= 0)
    {
        if(a == 0)
            return 0;
        else if(a == 1)
            return 1;
        else
            return fibonacci(a-1) + fibonacci(a-2);
    }
    else
        return "OOPS";

};

// Do not edit below this line
module.exports = fibonacci;
