let counter = 0;

const outcomeContainer = document.querySelector(".outcome-container");
const buttonsContainer = document.querySelector(".buttons-container");

const valor = document.createElement("span");
valor.id = "valor";
valor.textContent = counter;
outcomeContainer.appendChild(valor);

const btnIcrease = document.createElement("button");
btnIcrease.textContent = "+";
btnIcrease.classList.add("btn-increase");
btnIcrease.id = "increase";
buttonsContainer.appendChild(btnIcrease);

const btnDecrease = document.createElement("button");
btnDecrease.textContent = "-";
btnDecrease.classList.add("btn-decrease");
btnDecrease.id = "decrease";
buttonsContainer.appendChild(btnDecrease);

const btnReset = document.createElement("button");
btnReset.textContent = "RESET";
btnReset.classList.add("btn-reset");
btnReset.id = "reset";
buttonsContainer.appendChild(btnReset);

document.addEventListener("DOMContentLoaded", function () {
  let audioAdd = document.getElementById("soundAdd");
  let audioSub = document.getElementById("soundSub");
  let audioReset = document.getElementById("soundReset");
  let audio0 = document.getElementById("soundReset0");

  btnIcrease.addEventListener("click", function () {
    counter++;
    valor.innerHTML = counter;
    audioAdd.play();
  });

  btnDecrease.addEventListener("click", function () {
    if (counter > 0) {
      counter--;
      valor.innerHTML = counter;
      audioSub.play();
    } else {
      audio0.play();
    }
  });

  btnReset.addEventListener("click", function () {
    if (counter > 0) {
      audioReset.play();
      counter = 0;
      valor.innerHTML = counter;
    } else {
      audio0.play();
    }
  });
});
