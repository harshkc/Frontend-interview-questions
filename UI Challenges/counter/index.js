let count = document.getElementById("count");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let resetButton = document.getElementById("resetButton");
let submitButton = document.getElementById("inputSubmit");
let input = document.getElementById("incrementBy");

let countValue = 0;
let incrementBy = 1;

increment.addEventListener("click", function () {
  countValue += incrementBy;
  count.innerHTML = countValue;
});

decrement.addEventListener("click", function () {
  countValue -= incrementBy;
  count.innerHTML = countValue;
});

submitButton.addEventListener("click", function () {
  incrementBy = parseInt(input.value);
});

resetButton.addEventListener("click", function () {
  countValue = 0;
  incrementBy = 1;
  input.value = 1;
  count.innerHTML = countValue;
});
