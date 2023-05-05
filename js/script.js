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
  "Project Manager",
  "Business Analyst",
  "Team Leader",
];
let currentWord = 0;
function increaseValue() {
  currentWord = currentWord === 0 ? words.length - 1 : currentWord - 1;
  input.value = words[currentWord];
}
function decreaseValue() {
  currentWord = currentWord === words.length - 1 ? 0 : currentWord + 1;
  input.value = words[currentWord];
}
upArrow.addEventListener("click", increaseValue);
downArrow.addEventListener("click", decreaseValue);

// Slider code
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
};
