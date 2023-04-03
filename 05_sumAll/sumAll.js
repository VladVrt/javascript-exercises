const sumAll = function (num1, num2) {
  let sum = 0;
  i = num1;
  y = num2;
  if (i < 0 || y < 0 || Number(i)!==i || Number(y)!==y) {
    return "ERROR";
  } else if (i < y) {
    for (i; i <= y; i++) {
      sum += i;
    }
    return sum;
  } else if (i > y) {
    for (y; y <= i; y++) {
      sum += y;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
