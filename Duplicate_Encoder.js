function duplicateEncode(word){
    const charCount = {};
    const wordLower = word.toLowerCase();
    for (let char of wordLower) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return wordLower.split('').map(char => charCount[char] === 1 ? '(' : ')')
      .join('');
  }