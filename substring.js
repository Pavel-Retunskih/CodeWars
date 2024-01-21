let arr = ["yoda", "best", "has"]
function nthChar(words){
let str = ''
for (let i = 0; i < words.length; i++) {
   str+=words[i][i]
}
return str
}



console.log(nthChar(arr));