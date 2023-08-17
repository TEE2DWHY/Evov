// Globals
const baseUrl = "https://evov.onrender.com";
const modal = document.querySelector(".modal-container");
const signupForm = document.querySelector("#signup");
const buttonText = document.querySelector(".button-text");
const spinner = document.querySelector(".loading");
const closeButton = document.querySelector(".close");
const err = document.querySelector(".err");

// function to toggle loading state and button text
const toggleLoadingState = () => {
  buttonText.classList.toggle("hide-button-text");
  spinner.classList.toggle("show-loading");
};

// function to toggle Modal
const toggleModal = () => {
  modal.classList.toggle("show-modal");
};

// function to clear input fields
const clearInputFields = () => {
  const inputFields = document.querySelectorAll("input");
  inputFields.forEach((input) => (input.value = ""));
};

//  Handle Sign up request
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fullName = document.querySelector("#fullname").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;
  const formData = {
    fullName: fullName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };
  toggleLoadingState();
  try {
    const res = await axios.post(`${baseUrl}/api/v1/register`, formData);
    console.log(res.data);
    toggleLoadingState();
    toggleModal();
    clearInputFields();
  } catch (error) {
    toggleLoadingState();
    err.innerHTML = error.response.data.msg;
    setTimeout(() => {
      err.innerHTML = "";
    }, 3000);
  }
});

// close modal
closeButton.addEventListener("click", toggleModal);
