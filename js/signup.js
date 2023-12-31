import { register } from "../config/urls.js";
// Define components
const modal = document.querySelector(".modal-container");
const form = document.querySelector("form");
const buttonText = document.querySelector(".button-text");
const spinner = document.querySelector(".loading");
const closeButton = document.querySelector(".close");
const err = document.querySelector(".err");

// Function to toggle loading state and button text
const toggleLoadingState = () => {
  buttonText.classList.toggle("hide-button-text");
  spinner.classList.toggle("show-loading");
};

// Function to toggle Modal
const toggleModal = () => {
  modal.classList.toggle("show-modal");
};

// Function to clear input fields
const clearInputFields = () => {
  const inputFields = document.querySelectorAll("input");
  inputFields.forEach((input) => (input.value = ""));
};

// Function to handle form submission
const handleFormSubmit = async (e) => {
  e.preventDefault();
  toggleLoadingState();

  const formData = {
    fullName: document.querySelector("#fullname").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    confirmPassword: document.querySelector("#confirm-password").value,
  };

  try {
    const res = await axios.post(register, formData);
    console.log(res.data);
    toggleLoadingState();
    toggleModal();
    clearInputFields();
  } catch (error) {
    toggleLoadingState();
    err.innerHTML = error.response.data.msg;
  }
};

// Event listeners
form.addEventListener("submit", handleFormSubmit);
closeButton.addEventListener("click", toggleModal);
form.addEventListener("focusin", () => {
  err.innerHTML = "";
});
