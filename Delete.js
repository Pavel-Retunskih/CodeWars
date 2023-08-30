//Task
/*Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. 
For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].*/

let lst  = [30, 41, 47, 41, 41, 30, 47, 35, 47, 47, 30, 47, 40, 12, 30, 47, 2, 12, 30, 2, 36, 30, 30, 30, 47, 30, 12, 47, 2, 35, 40, 30, 40, 12]

function deleteNth(arr, n){
    let map = new Map();
    for (let num of arr) {
      map.has(num) ? map.set(num, map.get(num)+ 1) : map.set(num, 1)
    }
    let arrNew = [];
    for (let num of map.keys()) {
        if (map.get(num) > n) {
            map.set(num, n)
        }
    }
     for (num of arr) {
         if (map.get(num) <= n && map.get(num) !== 0 ) {
            arrNew.push(num);
            map.set(num, map.get(num) - 1)
        } 
    }  
    return arrNew;
}

console.log(deleteNth(lst, 3))