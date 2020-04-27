function superbowlWin(x){
  let w = x.find(function(y){
    return y.result === "W"
  })
  if(w) {
    return w.year
  }
}