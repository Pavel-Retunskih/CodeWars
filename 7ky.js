function reverseWords(str) {
    return str.match(/\S/).input.split('').reverse().join('').split(' ').reverse().join(' ')
  }

let str1 = 'apple beries';

console.log(reverseWords(str1));

function removeExclamationMarks(s) {
    return s.split("!").join("");
  }

  let str2 = "h!sey!";
  console.log(removeExclamationMarks(str2));


  function areYouPlayingBanjo(name) {
    return (/^[r R]/).test(name) ?`${name} plays banjo`:`${name} does not play banjo`;
  }


  function findNeedle(haystack) {
    return haystack.includes("needle") ?`found the needle at position ${haystack.indexOf("needle")} the index`: "Your function didn't return anything";
    
  }

let arr = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
console.log(findNeedle(arr));
