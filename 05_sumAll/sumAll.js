const sumAll = function(a,b) 
{
    if(typeof(a) == "number" &&  typeof(b) == "number")
    {
        if(a>0 && b>0)
        {
            let sum =0;
            if(a>b)
            {
                let temp = a;
                a = b;
                b = temp;
            }
            for(let i = a;i<=b;i++)
            {   
                sum = sum + i;
            }
            return sum;
        }
        else
            return "ERROR";
    }
    else
        return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
