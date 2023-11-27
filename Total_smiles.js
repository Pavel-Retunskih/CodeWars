//return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.filter(smile=>(/^(:|;)(-|~)?(\)|D)$/).test(smile)).length

}  
  let str = ":-)"
let arr= [':)',':(',':D',':O',':;'];
  console.log(countSmileys(arr));



  