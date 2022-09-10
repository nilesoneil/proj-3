function mrRobo(userInput) {
  let thisArray = [];
  for (let index = 0; index <= userInput; index++) {
    let appendable = index
  if (index.toString().includes("1")) {
    appendable = "beep";
  }
  thisArray.push(appendable);
  }
  return thisArray
}