// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
let str ="is2 Thi1s T4est 3a"
function order(words){
   let arr = words.split(" ");
   let out = [];
    for (let i = 0; i < arr.length; i++) {
        if ((/[1-9]/).test(arr[i])) {
            out[arr[i].match(/[1-9]/)[0]] =arr[i]            
        }
        
    }
    return out.join(" ").trimStart();
}

console.log(order(str));