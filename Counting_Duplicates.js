function duplicateCount(text){
    const charCount = {};
    const inputStringLower = text.toLowerCase();
    for (let i = 0; i < inputStringLower.length; i++) {
      const char = inputStringLower[i];
      if (char.match(/[a-z0-9]/i)) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
    }
    return Object.values(charCount).filter(count => count > 1).length;
  }