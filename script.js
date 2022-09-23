let inputbox = document.getElementById("input");
let wordBtn = document.getElementById("btnword");
let charBtn = document.getElementById("btnchar");
let showWord = document.getElementById("showwordcount");
let showChar = document.getElementById("showcharcount");

let countWord = () => {
  let str = inputbox.value;
  const arr = str.split(" ");

  let count = arr.filter((word) => word !== "").length;
  showWord.textContent = `Total Word is: ${count}`;
};

let countChar = () => {
  let str = inputbox.value;
  const arr = str.split(" ");
  let text = arr.join("");

  showChar.textContent = `Total Characters are: ${text.length}`;
};

let runMethod = () => {
  countChar();
  countWord();
};

wordBtn.addEventListener("click", countWord);
charBtn.addEventListener("click", countChar);

inputbox.addEventListener("input", runMethod);
