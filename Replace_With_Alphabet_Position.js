function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let positions = [];
    for(let char of text.toLowerCase()){
      let index = alphabet.indexOf(char)
      if(index !== -1){
        positions.push(index +1)
      }
    }
    return positions.join(" ")
  }