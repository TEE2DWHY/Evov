// Manage Navbar Toggle
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
menu.addEventListener("click", () => {
  menu.classList.toggle("hide-menu");
  closeMenu.classList.toggle("close-menu");
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList.toggle("close-menu");
  menu.classList.toggle("hide-menu");
});

// Manage form submission
const form = document.querySelector("form");
const formErr = document.querySelector(".error");
const spinner = document.querySelector(".spinner-border");
const buttonText = document.querySelector(".button-text");
const success = document.querySelector(".success");

form.addEventListener("submit", async (e) => {
  const apiUrl = "https://evov.onrender.com/api/v1/register";
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const formData = {
    email: email,
  };
  e.preventDefault();
  buttonText.classList.toggle("hide-button-text");
  spinner.classList.toggle("show-spinner");
  // Handle Post Request using axios.
  try {
    const res = await axios.post(apiUrl, formData);
    success.innerHTML = `${email} is subscribed!.`;
    setTimeout(() => {
      success.innerHTML = "";
    }, 3000);
    buttonText.classList.toggle("hide-button-text");
    spinner.classList.toggle("show-spinner");
    emailInput.value = "";
  } catch (err) {
    formErr.innerHTML = `${err.response.data.msg}`;
    setTimeout(() => {
      formErr.innerHTML = "";
    }, 3000);
    buttonText.classList.toggle("hide-button-text");
    spinner.classList.toggle("show-spinner");
  }
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