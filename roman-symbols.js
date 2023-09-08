// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
function romanToDecimal(roman) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    
    let decimalValue = 0;
  
    for (let i = 0; i < roman.length; i++) {
      if (romanNumerals[roman[i]] > romanNumerals[roman[i + 1]]) {
        decimalValue -= romanNumerals[roman[i]];
      } else {
        decimalValue += romanNumerals[roman[i]];
      }
    }
  
    return decimalValue;
  }
  console.log(romanToDecimal("MDXC"))