const hamburger = document.querySelector("#hamburger");
const navText = document.querySelector(".navtext");

hamburger.addEventListener("click", function () {
  navText.classList.toggle("show");
});
