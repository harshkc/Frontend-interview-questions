const stars = document.getElementsByClassName("star");
const rate = document.getElementById("rate");

for (let i = 0; i < stars.length; ++i) {
  stars[i].addEventListener("click", () => {
    rate.innerHTML = stars.length - i;
    for (let j = i; j < stars.length; j++) {
      stars[j].style.color = "gold";
    }
    for (let k = i - 1; k >= 0; --k) {
      stars[k].style.color = "";
    }
  });
}
