function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i]);
            if(array[i] % 2 !== 0 &&array[j] % 2 !== 0 && array[i]<array[j]){
                let curr = array[i];
                array[i] = array[j];
                array[j] = curr;
            }
        }
        
    }
    return array
}

  let arr = [5, 3, 2, 8, 1, 4];
  console.log(sortArray(arr));


//   [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]