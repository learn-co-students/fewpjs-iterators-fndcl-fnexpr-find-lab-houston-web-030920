const testVar = {}

function testFunc() {
  return "hi"
}

let superbowlWin = function(arr){
  // let result = arr.find(function(a) { return a.result === "W" })
  // return !!result ? result.year : undefined
  
  let result = arr.find(function(a) {return a.result === "W" })
  if(result){
    return result.year
  }else{
    return undefined
  }
}