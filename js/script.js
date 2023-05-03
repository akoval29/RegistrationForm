// Spoiler code
const input = document.getElementById("SourceOfIncome");
const upArrow = document.querySelector('.arrow.up');
const downArrow = document.querySelector('.arrow.down');
const words = ["Developer", "QA Engineer", "UI/UX Designer", "Project Manager", "Business Analyst", "Team Leader"];
let currentWord = 0;

function increaseValue() {
  currentWord = currentWord === 0 ? words.length - 1 : currentWord - 1;
  input.value = words[currentWord];
};

function decreaseValue() {
  currentWord = currentWord === words.length - 1 ? 0 : currentWord + 1;
  input.value = words[currentWord];
};

upArrow.addEventListener('click', increaseValue);
downArrow.addEventListener('click', decreaseValue);



// Slider code
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}