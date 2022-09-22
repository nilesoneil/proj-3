function mrRobo(theInput) {
  let thisArray = [];
  for (let index = 0; index <= theInput; index++) {
    let appendable = index
  if (index.toString().includes("1")) {
    appendable = "beep";
  }
  if (index.toString().includes("2")) {
    appendable = "boop";
  }
  if (index.toString().includes("3")) {
    appendable = "won't you be my neighbor";
  }
  thisArray.push(appendable);
  }
return thisArray
}

function addFormListener() {
  const form = document.querySelector("form");
  form.addEventListener("submit", onFormSubmit)
}

function onFormSubmit(event) {
  event.preventDefault();
  const theInput = parseInt(document.querySelector("input").value)
  const result = mrRobo(theInput)
  document.getElementById("result").textContent = result;
}

window.addEventListener("load", addFormListener);