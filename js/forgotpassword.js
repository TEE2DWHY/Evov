import { forgotPassword } from "../config/urls.js";
// Global
const form = document.querySelector("form");
const err = document.querySelector(".error");
const buttonText = document.querySelector(".button-text");
const spinner = document.querySelector(".loading");
const modal = document.querySelector(".modal-container");

// Handle button loading state
const toggleLoadingState = () => {
  buttonText.classList.toggle("hide-button-text");
  spinner.classList.toggle("show-spinner");
};

// Handle Modal
const showModal = () => {
  modal.classList.toggle("show-modal");
};

// Handle form submission
const handleFormSubmit = async (e) => {
  e.preventDefault();
  toggleLoadingState();
  const formData = {
    email: document.querySelector("#email").value,
  };
  try {
    const res = await axios.post(forgotPassword, formData);
    toggleLoadingState();
    showModal();
  } catch (error) {
    toggleLoadingState();
    err.innerHTML = error.response.data.msg;
  }
};

form.addEventListener("submit", handleFormSubmit);
form.addEventListener("focusin", () => {
  err.innerHTML = "";
});
