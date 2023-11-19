function rank(st, we, n) {
    if (st === "") {
       return "No participants";
     }
     const names = st.split(",");
     if (n > names.length) {
       return "Not enough participants";
     }
     const winningNumbers = names.map((name, index) => {
         const sumOfRanks = name.split("").reduce((acc, cur) => {
         return acc + cur.toUpperCase().charCodeAt(0) - 64;
       }, 0);
       const som = sumOfRanks + name.length;
       return som * we[index];
     });
       const participants = names.map((name, index) => {
       return { name, winningNumber: winningNumbers[index] };
     });
      participants.sort((a, b) => {
       if (a.winningNumber === b.winningNumber) {
         return a.name.localeCompare(b.name);
       }
       return b.winningNumber - a.winningNumber;
     });
    return participants[n - 1].name;
   }
   