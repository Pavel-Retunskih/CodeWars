function remove(str) {
    let arr = str.split(" ");
    let item = []
    for (let i = 0; i < arr.length; i++) {
      if (i == arr.length - 1) {
          item = arr[i].split("");
          for (let k = 0; k < item.length; k++) {
              if(item[k] == "!" && k == item.length - 1){
                item.pop();                
            }       
          }
          arr[i] = item.join('');         
        }
    } 
    return arr.join(" ")  
}  
    


console.log(remove("hi!!!!"));