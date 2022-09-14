const removeFromArray = function([a,b,c,d],e,f) {
    let arr = [a,b,c,d];
    for(let i=0;i<4;i++)
    {
        if(arr[i] == e || arr[i] == f)
            arr.splice(i,1);
    }
    return;
};

// Do not edit below this line
module.exports = removeFromArray;
