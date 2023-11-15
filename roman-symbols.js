// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
function romanToDecimal(roman) {
    const romNums = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };    
    let out = 0;
    let strToArr =roman.split('')  
    for (let i = 0; i < strToArr.length; i++) {
      if (romNums[strToArr[i]] < romNums[strToArr[i + 1]]) {
        out -= romNums[strToArr[i]];
      } else {
        out += romNums[strToArr[i]];
      }
    }
    return out;    
  }
  console.log(romanToDecimal("MCMXC"))
  let str = "MCMXC";
  console.log(str.split(''));