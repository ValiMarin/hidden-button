const buttonsContainer = document.getElementById("buttonsContainer");
const generateButton = document.getElementById("generateButton");
const nrButtons = document.getElementById("nrButtons");
const message = document.getElementById("message");
const buttons = [];
let winningButton = 0;

function reset(time) {
  setTimeout(() => {
    generateButton.disabled = false;
    nrButtons.value = "";
    message.textContent = "Generate!";
    buttons.forEach((button) => {
      button.remove();
    });
    buttons.length = 0;
  }, time);
}

function clickEvent(id) {
  const idButton = document.getElementById(id);
  idButton.disabled = true;

  if (idButton.id == winningButton) {
    idButton.textContent = "X";
    idButton.classList.replace("btn-primary", "btn-success");
    message.textContent = "Hidden button found!";
    reset(3000);
  } else {
    idButton.textContent = "!";
    idButton.classList.replace("btn-primary", "btn-danger");
    message.textContent = "Wrong button!";
  }
}

function createButton() {
  for (let i = 1; i <= nrButtons.value; ++i) {
    const button = document.createElement("button");
    button.textContent = "?";
    button.id = i;
    button.classList.add("btn", "btn-primary", "boardBtn");
    buttonsContainer.appendChild(button);
    buttons.push(button);

    button.addEventListener("click", (e) => {
      clickEvent(e.target.id);
    });
  }
}

function generate() {
  winningButton = Math.floor(Math.random() * nrButtons.value) + 1;
  generateButton.disabled = true;
  message.textContent = "Find the hidden button!";
  createButton();
}
