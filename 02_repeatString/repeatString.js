const repeatString = function (string, num) {
  let repeatString = string;
  if (num == 0) {
    repeatString = "";
  } else if (num < 0) {
    repeatString = "ERROR";
  } else {
    for (let i = 1; i < num; i++) {
      repeatString += string;
    }
  }
  return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
