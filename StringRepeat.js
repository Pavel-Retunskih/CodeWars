function repeatStr (n, s) {
    let out ='';
    for (let i = 0; i < n; i++) {
        out+=s
    }
    return out
  }
  console.log(repeatStr(5,"asd|"));


function fakeBin(x){
    return x.replace(/[1-4]/g, 0).replace(/[5-9]/g, 1)
    }

    console.log(fakeBin("251432"));


var number = function(busStops){
    let pass = 0;
    for (let i = 0; i<busStops.length; i++){
      pass = pass + busStops[i][0] - busStops[i][1];
    }
    return pass;
  }