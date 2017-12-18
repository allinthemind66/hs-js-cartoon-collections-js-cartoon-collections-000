function dwarfRollCall(dwarves) {
  var newArr = [];

  for(var i = 0; i < dwarves.length; i++){
    var num = i + 1;
    newArr.push(`${num}. ${dwarves[i]}`)
  }
  return newArr.join(" ")
}

function summonCaptainPlanet(planeteerCalls){
  var newArr = [];
  planeteerCalls.forEach(function(element){
    newArr.push(element.toUpperCase() + "!")
  })
  return newArr;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if(words[i].length > 4){
      return true
    }
    }
    return false
  }


function findTheCheese (foods) {
for(var i = 0; i < foods.length; i++){
  if(foods[i] == "cheddar" || foods[i] == "gouda" || foods[i] == "camembert"){
    return foods[i]
  }
}
return "no cheese!"

}
