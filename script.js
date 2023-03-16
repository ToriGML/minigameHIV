const game = {
  timerId: null,
  time: 120,
  score: 0,
  levels: {
    l1: false,
    l2: false,
    l3: false,
    l4: false,
    l5: false,
    l6: false,
    l7: false,
    l8: false,
    l9: false,
    l10: false,
  },
};
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "black",
  "white",
];

const cores = (correctColor) => {
  let colorsArr = [];

  while (colorsArr.length < 4) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    if (!colorsArr.includes(randomColor) && randomColor != correctColor) {
      colorsArr.push(randomColor);
    }
  }

  return colorsArr;
};

document.getElementById("fase01").addEventListener("targetFound", (e) => {
  if (!game.levels.l1) {
    document.getElementById("container").innerHTML = randomHTML();
    game.levels.l1 = true;
    btns().forEach((element) => {
      element.addEventListener("click", () => {
        timer();
        resposta(element.value);
      });
    });
  }
});
document.getElementById("fase02").addEventListener("targetFound", (e) => {
  if (!game.levels.l2) {
    document.getElementById("container").innerHTML = randomHTML();
    game.levels.l2 = true;
    btns().forEach((element) => {
      element.addEventListener("click", () => {
        timer();
        resposta(element.value);
      });
    });
  }
});
document.getElementById("fase03").addEventListener("targetFound", (e) => {
  if (!game.levels.l3) {
    document.getElementById("container").innerHTML = randomHTML();
    game.levels.l3 = true;
    btns().forEach((element) => {
      element.addEventListener("click", () => {
        timer();
        resposta(element.value);
      });
    });
  }
});
document.getElementById("fase04").addEventListener("targetFound", (e) => {
  if (!game.levels.l4) {
    document.getElementById("container").innerHTML = randomHTML();
    game.levels.l4 = true;
    btns().forEach((element) => {
      element.addEventListener("click", () => {
        timer();
        resposta(element.value);
      });
    });
  }
});
document.getElementById("fase05").addEventListener("targetFound", (e) => {
  if (!game.levels.l5) {
    document.getElementById("container").innerHTML = randomHTML();
    game.levels.l5 = true;
    btns().forEach((element) => {
      element.addEventListener("click", () => {
        timer();
        resposta(element.value);
      });
    });
  }
});
document.getElementById("fase06").addEventListener("targetFound", (e) => {
  if (!game.levels.l6) {
    document.getElementById("container").innerHTML = randomHTML();
    game.levels.l6 = true;
    btns().forEach((element) => {
      element.addEventListener("click", () => {
        timer();
        resposta(element.value);
      });
    });
  }
});
document.getElementById("fase07").addEventListener("targetFound", (e) => {
  if (!game.levels.l7) {
    document.getElementById("container").innerHTML = randomHTML();
    game.levels.l7 = true;
    btns().forEach((element) => {
      element.addEventListener("click", () => {
        timer();
        resposta(element.value);
      });
    });
  }
});
document.getElementById("fase08").addEventListener("targetFound", (e) => {
  if (!game.levels.l8) {
    document.getElementById("container").innerHTML = randomHTML();
    game.levels.l8 = true;
    btns().forEach((element) => {
      element.addEventListener("click", () => {
        timer();
        resposta(element.value);
      });
    });
  }
});
document.getElementById("fase09").addEventListener("targetFound", (e) => {
  if (!game.levels.l9) {
    document.getElementById("container").innerHTML = randomHTML();
    game.levels.l9 = true;
    btns().forEach((element) => {
      element.addEventListener("click", () => {
        timer();
        resposta(element.value);
      });
    });
  }
});
document.getElementById("fase10").addEventListener("targetFound", (e) => {
  if (!game.levels.l10) {
    document.getElementById("container").innerHTML = randomHTML();
    game.levels.l10 = true;
    btns().forEach((element) => {
      element.addEventListener("click", () => {
        timer();
        resposta(element.value);
      });
    });
  }
});

const randomHTML = () => {
  const correctColor = colors[Math.floor(Math.random() * colors.length)];
  const [cor1, cor2, cor3, cor4] = cores(correctColor);
  const [nome1, nome2, nome3, nome4] = cores(correctColor);
  const aaa = [cor1, cor2, cor3, correctColor].sort(() => Math.random() - 0.5);
  let html = `
  <div id="counter">
      ${game.score}
  </div>
  <div>
      <h1 style="color: ${cor4};" id="H1">${correctColor}</h1>
      <div id="colors">
      <button id="btn1" style="background-color: ${aaa[0]};" value="${aaa[0]}">
          ${nome1}
      </button>
      <button id="btn2" style="background-color: ${aaa[1]};" value="${aaa[1]}">
          ${nome2}
      </button>
      <button id="btn3" style="background-color: ${aaa[2]};" value="${aaa[2]}">
          ${nome3}
      </button>
      <button id="btn4" style="background-color: ${aaa[3]};" value="${aaa[3]}">
          ${nome4}
      </button>
      </div>
  </div>
`;
  return html;
};

const timer = () => {
  if (!game.timerId) {
    const counterElement = document.getElementById("counter");
    const counterValue = parseInt(counterElement.textContent, 10);
    if (!isNaN(counterValue)) {
      game.time = counterValue;
      game.timerId = setInterval(() => {
        game.time--;
        counterElement.innerText = game.time;
      }, 1000);
    }
  }
};

const btns = () => {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const btn4 = document.getElementById("btn4");
  return [btn1, btn2, btn3, btn4];
};

const resposta = (color) => {
  const h1 = document.querySelector("#H1");
  document.getElementById("container").innerHTML = "";
  if (h1.textContent !== color) {
    clearInterval(id);
    alert(
      "Você perdeu, seu pontuação foi: " +
        game.score +
        "\nE seu tempo:" +
        game.time
    );
  } else {
    game.score++;
    if (game.score == 10) {
      clearInterval(id);
      alert(
        "Parabéns, você ganhou o jogo. Sua pontuação foi de: " +
          game.score +
          "\nE seu tempo: " +
          game.time
      );
    }
  }
};
