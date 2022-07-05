let board = document.querySelector(".board");
let createBtn = document.querySelector("#create-btn");

createBtn.addEventListener("click", createBoard);

function createBoard() {
  board.innerHTML = "";
  let inputSize = document.querySelector("#input-size");
  let size = parseInt(inputSize.value);
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      if ((i + j) % 2 === 0) square.classList.add("black");
      row.appendChild(square);
    }
    board.appendChild(row);
  }
}
