function digitize(n) {
  let arr =n.split('').reverse();
  let out=[]
  for (let i = 0; i < arr.length; i++) {
    out.push(+arr[i])
    
  }
  return out
    
  }

  console.log(digitize("123"));