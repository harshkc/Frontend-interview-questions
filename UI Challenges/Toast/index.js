const toastButton = document.getElementById("toast-button");
const toast = document.getElementById("toast");

toastButton.addEventListener("click", function () {
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
});
