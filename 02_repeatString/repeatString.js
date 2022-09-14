const repeatString = function(s, n ) {
    let str = "";
    if(n>=0){
    for (let i = 0; i < n; i++) {
        str = str + s;
    }
    }
    else
        return "ERROR";   
    return str;
};

// Do not edit below this line
module.exports = repeatString;
