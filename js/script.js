// Validator
import { RegistrationFormValidator } from "./validate.js";
const footer = document.querySelector(".footer");
const footerError = document.querySelector(".footer__error");
const submitBtn = document.querySelector(".footer__button");

const emailInput = document.getElementById("email");
const firstNameInput = document.getElementById("first-name");
const passInput = document.getElementById("password");
const confirmPassInput = document.getElementById("confirm-password");

submitBtn.addEventListener("click", () => {
  const validator = new RegistrationFormValidator(
    emailInput.value,
    firstNameInput.value,
    passInput.value,
    confirmPassInput.value
  );

  const errors = validator.validate();
  footerError.innerHTML = "";
  if (errors) {
    footer.style.justifyContent = "space-between";
    footerError.style.color = "red";
    for (let key in errors) {
      if (errors[key]) {
        footerError.innerHTML += `<p>${errors[key]}</p>`;
      }
    }
  } else {
    footerError.style.color = "lightgreen";
    footerError.innerHTML += `<p>Всі поля введено правильно!</p>`;
  }
});

// Spoiler code
const input = document.getElementById("SourceOfIncome");
const upArrow = document.querySelector(".grid__arrow--up");
const downArrow = document.querySelector(".grid__arrow--down");
const words = [
  "Developer",
  "QA Engineer",
  "UI/UX Designer",
  "Business Analyst",
  "Project Manager",
  "Team Leader",
];
let currentWord = 0;
upArrow.addEventListener("click", () => {
  if (currentWord === words.length - 1) {
    currentWord = 0;
  } else {
    currentWord += 1;
  }
  input.value = words[currentWord];
});
downArrow.addEventListener("click", () => {
  if (currentWord === 0) {
    currentWord = words.length - 1;
  } else {
    currentWord -= 1;
  }
  input.value = words[currentWord];
});

// Slider code
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
};
