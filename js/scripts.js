function mrRobo(userInput) {
  let thisArray = [];
  for (let index = 0; index <= userInput; index++) {
    let appendable = index
  if (index.toString().includes("1")) {
    appendable = "beep";
  }
  if (index.toString().include("2") {
    appendable = "boop";
  }
  thisArray.push(appendable);
  }
  return thisArray
}