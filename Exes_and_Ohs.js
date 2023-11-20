function XO(str) {
    let xCount = 0;
    let oCount = 0;
     for(const char of str.toLowerCase()){
       if (char === "x"){
         xCount++
       }else if(char === "o"){
         oCount++
       }
     }
    return xCount === oCount;
  }