const reverseString = function(str) {
    let l = str.length;
    let rev = "";
    for(let i = l-1 ; i>=0;i--)
    {
        rev = rev + str[i];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
