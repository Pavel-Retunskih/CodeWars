function spinWords(string){
    let arrWord = string.split(" ");
    let word = '';
    console.log(arrWord);

    for (let i = 0; i < arrWord.length; i++) {
      if (arrWord[i].length >= 5){
                word = arrWord[i].split('');
                word = word.reverse();
                arrWord[i] = word.join('')
            }
        
    }
    return arrWord.join(' ');
}

console.log(spinWords("Just kidding there is still one more"));