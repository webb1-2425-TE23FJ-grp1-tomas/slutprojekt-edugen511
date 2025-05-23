document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navText = document.querySelector(".navtext");

  if (hamburger && navText) {
    hamburger.addEventListener("click", () => {
      navText.classList.toggle("show");
    });
  }
});