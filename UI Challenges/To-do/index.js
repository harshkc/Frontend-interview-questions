let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");
let redBtn = document.getElementById("red");
let yellowBtn = document.getElementById("yellow");
let greenBtn = document.getElementById("green");

function inputLength() {
  return input.value.length;
}

function createListElement(color) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.classList.add(color);
  ul.appendChild(li);
  input.value = "";

  function crossOut() {
    if (li.classList.contains("done")) {
      disableDelete();
    } else {
      enableDelete();
    }
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossOut);

  function enableDelete() {
    let dBtn = document.createElement("button");
    dBtn.classList.add("dbtn");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
  }

  function disableDelete() {
    let dBtn = li.getElementsByClassName("dbtn");
    li.removeChild(dBtn[0]);
  }

  function deleteListItem() {
    li.classList.add("delete");
  }
}

let color = "red";
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement(color);
  }
}

enterButton.addEventListener("click", addListAfterClick);
redBtn.addEventListener("click", () => {
  color = "red";
  redBtn.classList.add("selected");
  greenBtn.classList.remove("selected");
  yellowBtn.classList.remove("selected");
});
yellowBtn.addEventListener("click", () => {
  color = "yellow";
  redBtn.classList.remove("selected");
  greenBtn.classList.remove("selected");
  yellowBtn.classList.add("selected");
});
greenBtn.addEventListener("click", () => {
  color = "green";
  redBtn.classList.remove("selected");
  greenBtn.classList.add("selected");
  yellowBtn.classList.remove("selected");
});
