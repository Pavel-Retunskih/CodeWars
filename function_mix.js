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
console.log(result);
  return result.sort((a,b)=>b.length-a.length || b.localeCompare(a)).join('/')
}




console.log(mix("Are they here", "yes, they are here")); 



//2:eeeee/2:yy/=:rr/=:hh ----- получилось
//-------------------------------
//"2:eeeee/2:yy/=:hh/=:rr" ---- нужно
//