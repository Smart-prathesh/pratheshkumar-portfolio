// Select hamburger and nav menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".header nav ul");

// Toggle active class on click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
