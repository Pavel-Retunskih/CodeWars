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
  const s1Freq = getFrequency(s1);
  console.log(s1Freq)
  const s2Freq = getFrequency(s2);
  console.log(s2Freq)
  const result = [];


  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    const s1Count = s1Freq[char] || 0;
    const s2Count = s2Freq[char] || 0;
    const maxCount = Math.max(s1Count, s2Count);

    if (maxCount > 1) {
      const from = maxCount === s1Count ? 1 : 2;
      const prefix = `${from}:${char.repeat(maxCount)}`;
      result.push(prefix);
    } else if (s1Count === s2Count && s1Count === 1) {
      const prefix = `=:${char}`;
      result.push(prefix);
    }
  }

  return result.sort((a, b) => b.length - a.length || a.localeCompare(b)).join('/');
}




console.log(mix("Are they here", "yes, they are here")); 



//2:eeeee/1:hh/1:rr/2:yy/=:t ----- получилось
//-------------------------------
//"2:eeeee/2:yy/=:hh/=:rr" ---- нужно
//