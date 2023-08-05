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
const success = document.querySelector(".success");

form.addEventListener("submit", async (e) => {
  const apiUrl = "http://localhost:3000/api/v1/register";
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const formData = {
    email: email,
  };
  e.preventDefault();
  // Handle Post Request using axios.
  try {
    const res = await axios.post(apiUrl, formData);
    success.innerHTML = `${email} is subscribed!.`;
    setTimeout(() => {
      success.innerHTML = "";
    }, 3000);
    emailInput.value = "";
  } catch (err) {
    formErr.innerHTML = `${err.response.data.msg}`;
    setTimeout(() => {
      formErr.innerHTML = "";
    }, 3000);
  }
});

// Render year dynamically
const year = document.getElementById("year");
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;
