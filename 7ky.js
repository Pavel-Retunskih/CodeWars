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


function oddOrEven(array) {
  if(array[0] == undefined){
    return "even"
  }else if (array.reduce((acum, item)=>{return acum+item})%2 === 0 && array.length!==0){
    return "even"
  }else return "odd"
}

let arr6 =[]
console.log(oddOrEven(arr6));

function minMax(arr){
let out =[];
out.push(Math.min(...arr));
out.push(Math.max(...arr));
return out.sort((a,b)=>{return a-b});
}

let arr9 = [79,9,67,23,424];
console.log(minMax(arr9));


var number=function(array){
  return array.map((el, index)=>{return `${index + 1}: ${el}`});
  }

  console.log(number(arr9));

  function printerError(s) {
    return ` ${s.split(/[a-m]/).join('').length}/${s.length}`
}
let str10 = 'aaajjkksxnnnshhhdggg'
console.log(printerError(str10));
