const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

let superBowlWin = (resultArr) =>{
  return resultArr.find((game)=>{
    return game.result == "W"
  })
}
// console.log(superBowlWin(record))
