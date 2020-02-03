

function whatToDoForLunch(hungry, availableTime) {
hungry = false
availableTime = 40
  if(hungry === false) {
    console.log("Wait until you're hungry");
  } else if(hungry === true && availableTime < 20) {
    console.log("Go pick something up to eat in the lab and get to know your fellow classmates");
  } else if(hungry === true && (availableTime >= 20 && availableTime <= 30)) {
    console.log("You deserve a break, go try a spot at Gastown");
  } else if(hungry === true && availableTime > 30) {
    console.log("Maybe you should just not go and work instead, it is a bootcamp after all");
} 
  }

whatToDoForLunch()





// function whatToDoForLunch(hungry, availableTime) {
//   console.log("hungry is", hungry);
//   console.log("availableTime is", availableTime);
// }