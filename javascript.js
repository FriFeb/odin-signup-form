const form = document.getElementById("reg-form");
const submitBtn = document.querySelector("button[type=submit]");
const firstName = document.getElementById("first-name");
const secondName = document.getElementById("second-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pass = document.getElementById("pass");
const confirmPass = document.getElementById("confirm-pass");

function showNameErrorMsg(event) {
  const nameInput = event.target;
  const validityState = nameInput.validity;
  const nameInputError = event.target.nextElementSibling;

  nameInput.classList.remove("error");
  nameInputError.textContent = "";

  if (validityState.valueMissing) {
    nameInput.classList.add("error");
    nameInputError.textContent = "* Please fill this field out!";
  }

  if (validityState.patternMismatch) {
    nameInput.classList.add("error");
    nameInputError.textContent = "* Should start with a capital letter!";
  }

  if (validityState.tooShort) {
    nameInput.classList.add("error");
    nameInputError.textContent = "* Name is too short!";
  }
}

function showEmailErrorMsg() {
  const validityState = email.validity;
  const emailError = email.nextElementSibling;

  email.classList.remove("error");
  emailError.textContent = "";

  if (validityState.valueMissing) {
    email.classList.add("error");
    emailError.textContent = "* Please fill this field out!";
  }

  if (validityState.typeMismatch) {
    email.classList.add("error");
    emailError.textContent = "* Should be an email!";
  }

  if (validityState.tooShort) {
    email.classList.add("error");
    emailError.textContent = "* Email is too short!";
  }
}

function showPhoneErrorMsg() {
  const validityState = phone.validity;
  const phoneError = phone.nextElementSibling;

  phone.classList.remove("error");
  phoneError.textContent = "";

  if (validityState.valueMissing) {
    phone.classList.add("error");
    phoneError.textContent = "* Please fill this field out!";
  }

  if (validityState.patternMismatch) {
    phone.classList.add("error");
    phoneError.textContent = "* Should contain only numbers!";
  }

  if (validityState.tooShort) {
    phone.classList.add("error");
    phoneError.textContent = "* Phone is too short!";
  }
}

function showPassErrorMsg() {
  const passValue = pass.value;
  const validityState = pass.validity;
  const passError = pass.parentElement.parentElement.lastElementChild;

  const capitalLetterRegExp = /(?=.*[A-Z])./;
  const letterRegExp = /^(?=.*[a-z])/;
  const digitRegExp = /^(?=.*\d)/;

  pass.classList.remove("error");
  passError.textContent = "";

  if (validityState.valueMissing) {
    pass.classList.add("error");
    passError.textContent = "* Please fill this field out!";
  }

  if (validityState.patternMismatch) {
    pass.classList.add("error");

    if (!capitalLetterRegExp.test(passValue)) {
      passError.textContent = "* Should contain at least one capital letter!";
    }
    if (!letterRegExp.test(passValue)) {
      passError.textContent = "* Should contain at least one letter!";
    }
    if (!digitRegExp.test(passValue)) {
      passError.textContent = "* Should contain at least one digit!";
    }
  }

  if (validityState.tooShort) {
    pass.classList.add("error");
    passError.textContent = "* Password is too short!";
  }
}

function showConfirmPassErrorMsg() {
  const confirmPassError = confirmPass.nextElementSibling;

  confirmPass.classList.remove("error");
  confirmPassError.textContent = "";

  if (confirmPass.validity.valueMissing) {
    confirmPass.classList.add("error");
    confirmPassError.textContent = "* Please fill this field out!";
  }

  if (confirmPass.value !== pass.value) {
    confirmPass.classList.add("error");
    confirmPassError.textContent = "* Passwords should match!";
  }
}

firstName.addEventListener("change", showNameErrorMsg);
secondName.addEventListener("change", showNameErrorMsg);
email.addEventListener("change", showEmailErrorMsg);
phone.addEventListener("change", showPhoneErrorMsg);
pass.addEventListener("change", showPassErrorMsg);
confirmPass.addEventListener("change", showConfirmPassErrorMsg);
