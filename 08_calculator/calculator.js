const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
  for(key in arr)
  {
    sum = sum + arr[key];
  }
  return sum;
};

const multiply = function(arr) {
  let mul = 1;
  for (key in arr)
  {
    mul = mul * arr[key];
  }
  return mul;
};

const power = function(a,b) {
  let ans = 1;
	for (let i = 0;i<b;i++)
  {
    ans = ans*a;
  }
  return ans;
};

const factorial = function(n) {
  if(n ==0 || n==1)
    return 1;
  else
    return n*factorial(n-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
