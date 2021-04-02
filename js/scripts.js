let numberArray = []

//buisness logic
function BeepBoop(number) {
  let numberInt = parseInt(number);
  for (let i = 0; i <= numberInt; i+=1);
  const numbers = (""+index).split("")

  if (index === 1 || numbers.includes("1")) {
    outputArray.push("beep")
  } else if (index === 2 || numbers.includes("2")) {
    outputArray.push("boop")
  } else if (index === 3 || numbers.includes("3")) {
    outputArray.push("Won't your be my neighbor?")
  } else if (number === 13) {
    return "Won't you be my neighbor"
  } else if (number === 21) {
    return "boop"
  } else if (number === 32) {
    return "Won't you be my neighbor"
  } 
  //let numberArray = ["0", "beep", "boop", "wont you be my neighbor", "4", "5"];
}
function resetApplication() {
  $(".results").text("").hide()
  $("form").trigger("reset")
}