function isValidWalk(walk) {
    let axis = {
    Y : 0,
    X : 0
  };
  if(walk.length === 10){
      walk.forEach((step)=>{
        switch (step) {
        case "n": axis.Y+=1        
          break;
        case "s": axis.Y-=1        
          break;
        case "w": axis.X-=1        
          break;
        case "e": axis.X+=1        
          break;
      }});
    }else return false;
   return axis.Y === axis.X && axis.Y ===0 && axis.X === 0;
  }