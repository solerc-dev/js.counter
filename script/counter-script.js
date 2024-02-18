let counter = 0;

const valor = document.getElementById("valor");
const btnIcrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");

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
