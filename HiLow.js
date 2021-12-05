let num = "8 3 -5 42 -1 0 0 -9 4 7 4 -4"
function highAndLow(str){
    let min = str.split(' ').reduce((prev,cur)=>{
         if (prev !== undefined){
            if(+prev<=+cur){
                return prev
            }else return cur
        }else return cur;         
    });

    let max = str.split(' ').reduce((prev,cur)=>{
        if (+cur>=+prev){
            return cur
        }else return prev; 
    })
    return max + " " + min;
}

console.log(highAndLow(num));