const charNumberContainer = document.querySelector("#charNumber");
const charUp = document.querySelector("#charUp");
const charDown = document.querySelector("#charDown");
const button = document.querySelector("#generate");
const histContainer = document.querySelector("#history");

// rules
const charMax = 9;
const charMin = 5;

// init history
const history = [];

function generateCodename() {
  let charNumber = Number(document.querySelector("#charNumber").textContent);
  const input = document.querySelector("#boringName");
  const string = input.value.replaceAll(" ", "");
  const result = document.querySelector("#codiname");
  let codiname = "";

  // generate
  for (letter of string) {
    const randomNum = (Math.random() * string.length).toFixed(0);
    const hard = randomNum <= Math.floor(string.length / 2);
    if (hard && codiname.length < charNumber) codiname += letter;
  }

  history.unshift(result.value);
  result.value = codiname.toLocaleLowerCase();
  histContainer.innerHTML = "<h2 class='title'>Histórico</h2>";
  history.forEach((name) => {
    const p = document.createElement("p");
    p.innerHTML = name;
    return histContainer.append(p);
  });
}

const incrementChar = () => {
  const charNumber = Number(charNumberContainer.textContent);
  if (charNumber == charMax) return;
  if (charNumber == charMin) charDown.classList.remove("blocked");
  if (charNumber == charMax - 1) charUp.classList.add("blocked");
  charNumberContainer.innerHTML = charNumber + 1;
};
const decrementChar = () => {
  const charNumber = Number(charNumberContainer.textContent);
  if (charNumber == charMin) return;
  if (charNumber == charMax) charUp.classList.remove("blocked");
  if (charNumber == charMin + 1) charDown.classList.add("blocked");
  charNumberContainer.innerHTML = charNumber - 1;
};

charUp.addEventListener("click", incrementChar);
charDown.addEventListener("click", decrementChar);
button.addEventListener("click", generateCodename);
