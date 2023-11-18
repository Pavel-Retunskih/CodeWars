// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
let s = "ss31asdafsdfgqq"

function accum(s) {
	let arr = s.split('');   
    console.log(arr.length); 
    let out =[]; 
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0){
            out.push('-')
           }       
        out.push(arr[i].toUpperCase())        
       for (let k = 0; k < i; k++) {
               out.push(arr[i].toLowerCase())                            
       } 
       
    }
    return out.join('')
}


console.log(accum(s));
"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"