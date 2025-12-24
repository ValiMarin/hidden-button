const buttonsContainer = document.getElementById("buttonsContainer");
const generateButton = document.getElementById("generateButton");
const nrButtons = document.getElementById("nrButtons");
const message = document.getElementById("message");
const buttons = [];

function generate() {
  const winningButton = Math.floor(Math.random() * nrButtons.value) + 1;
  generateButton.disabled = true;
  message.textContent = "Find the hidden button!";

  for (let i = 1; i <= nrButtons.value; ++i) {
    const button = document.createElement("button");
    button.textContent = "?";
    button.id = i;
    button.classList.add("btn", "btn-primary", "boardBtn");
    buttonsContainer.appendChild(button);
    buttons.push(button);

    button.addEventListener("click", (e) => {
      const idButton = document.getElementById(e.target.id);

      if (idButton.id == winningButton) {
        idButton.textContent = "X";
        idButton.classList.replace("btn-primary", "btn-success");
        message.textContent = "Hidden button found!";

        setTimeout(() => {
          generateButton.disabled = false;
          nrButtons.value = "";
          message.textContent = "Generate!";
          buttons.forEach((button) => {
            button.remove();
          });
          buttons.length = 0;
        }, 3000);
      } else {
        idButton.textContent = "!";
        idButton.classList.replace("btn-primary", "btn-danger");
        message.textContent = "Wrong button!";
      }
      idButton.disabled = true;
    });
  }
}
