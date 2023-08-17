import { login } from "../config/urls.js";
// Define components
const form = document.querySelector("form");
const spinner = document.querySelector(".loading");
const buttonText = document.querySelector(".button-text");
const err = document.querySelector(".err");

// function to manage button state and text
const toggleLoadingState = () => {
  spinner.classList.toggle("show-loading");
  buttonText.classList.toggle("hide-button-text");
};

// function to clear inputs after login
const clearInput = () => {
  const inputFields = document.querySelectorAll("input");
  inputFields.forEach((input) => (input.value = ""));
};

const handleFormSubmit = async (e) => {
  e.preventDefault();
  toggleLoadingState();
  const formData = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  try {
    const res = await axios.post(login, formData);
    console.log(res.data);
    toggleLoadingState();
    clearInput();
  } catch (error) {
    console.error(error);
    err.innerHTML = error.response.data.msg;
    toggleLoadingState();
  }
};

form.addEventListener("submit", handleFormSubmit);
form.addEventListener("focusin", () => {
  err.innerHTML = "";
});
