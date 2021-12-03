function isIsogram(str){
   let out = new Set(str.toLowerCase())
   let outt = Array.from(out);   
   return str.length == outt.length
  }

 
 console.log(isIsogram("moOse"));