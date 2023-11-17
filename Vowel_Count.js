function getCount(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    let array = str.split('');
    for (let i = 0; i < array.length; i++) {
        if(vowels.includes(array[i])){
            count++
        }
    }    
    return count;    
  }

    