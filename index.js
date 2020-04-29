const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array) {
  let result = array.find(function(s) { return s.result === "W" })
  if(result) {
    return result.year
  }
}
