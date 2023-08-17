// Manage Navbar Toggle
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
menu.addEventListener("click", () => {
  menu.classList.toggle("hide-menu");
  closeMenu.classList.toggle("close-menu");
});

// Render year dynamically
const year = document.getElementById("year");
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;

// add circle to cursor movement
const circle = document.querySelector(".circle");
document.addEventListener("mousemove", (e) => {
  circle.style.left = `${e.clientX}px`;
  circle.style.top = `${e.clientY}px`;
  circle.style.opacity = 1;
});
document.addEventListener("mouseleave", () => {
  circle.style.opacity = 0;
});
