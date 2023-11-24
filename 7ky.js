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

