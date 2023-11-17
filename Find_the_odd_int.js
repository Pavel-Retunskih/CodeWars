let a =[1,2,2,3,3,3,4,3,3,3,2,2,1]

 function findOdd(arr) {
      for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let k = 0; k < arr.length; k++) {
            if(arr[i]===arr[k]){
                count++
                console.log(count);
            }
        } 
        if (count % 2 !== 0){
            return arr[i]
        }      
    } 
  }



