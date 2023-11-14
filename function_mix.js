function mix(s1, s2) {
    function getFrequency(str) {
        const freq = {};
        for (let char of str) {
          if (/[a-z]/.test(char)) {
            freq[char] = (freq[char] || 0) + 1 ;
          }
        }
        console.log(freq);
        return freq;       
      }
    
// количество символов в строках      
  const s1Freq = getFrequency(s1);
  console.log(s1Freq)
  const s2Freq = getFrequency(s2);
  console.log(s2Freq)
  const result = [];

// перебор строк на количество похожих символов
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    const s1Count = s1Freq[char] || 0;
    const s2Count = s2Freq[char] || 0;
    const maxCount = Math.max(s1Count, s2Count);
// формирование строки
    if (maxCount > 1 && s1Count !== s2Count ) {
      const from = maxCount === s1Count ? 1 : 2;
      const prefix = `${from}:${char.repeat(maxCount)}`;
      result.push(prefix);
    } else if (s1Count === s2Count && s1Count > 1 && s2Count > 1) {
      const prefix = `=:${char.repeat(maxCount)}`;
      result.push(prefix);
    }
  }
// сортировка результата(не работает как надо) - FIX завтра попробовать
return result.sort((a, b) => {
  if (b.length - a.length !== 0) {
    return b.length - a.length;
  } else if (a.charCodeAt(0) !== b.charCodeAt(0)) {
    return a.charCodeAt(0) - b.charCodeAt(0);
  } else {
    return a.charCodeAt(2) - b.charCodeAt(2);
  }
}).join('/')
}
console.log(mix("A generation must confront the looming ", "codewarrs")); 

