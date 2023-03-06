const app = document.querySelector("#app");

const docTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "Comeback ♫";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

const container = document.createElement("div");
container.classList.add("container");

const alertBlock = document.createElement("div");
alertBlock.classList.add("alert");
app.appendChild(alertBlock);

const alertText = document.createElement("div");
alertText.classList.add("alert-text");
alertBlock.innerText =
  "Bringing the power of a full drum set to your fingertips, anytime, anywhere. Click or press key to play a sound.";
alertBlock.appendChild(alertText);

const alertClose = document.createElement("div");
alertClose.classList.add("alert-close");
alertClose.innerText = "X";
alertBlock.appendChild(alertClose);

function closeAlert() {
  alertBlock.style.display = "none";
}

alertClose.addEventListener("click", closeAlert);

const buttonMode = document.createElement("div");
buttonMode.classList.add("switch");

const btnDark = document.createElement("button");
const iconDark = document.createElement("i");
iconDark.classList.add("fa-solid");
iconDark.classList.add("fa-moon");
btnDark.appendChild(iconDark);

const btnLight = document.createElement("button");
const iconLight = document.createElement("i");
iconLight.classList.add("fa-solid");
iconLight.classList.add("fa-sun");
btnLight.appendChild(iconLight);

buttonMode.appendChild(btnDark);
buttonMode.appendChild(btnLight);

container.appendChild(buttonMode);

if (localStorage.getItem("mode") === "light") {
  lightMode();
} else {
  darkMode();
}

function lightMode() {
  let body = document.querySelector(":root");
  body.style.setProperty("--main-color", "#fffffc");
  body.style.setProperty("--background-color", "#ffd60a");
  body.style.setProperty("--text-color", "#212529");
  body.style.setProperty("--alert-color", "#212529");
  body.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
  localStorage.setItem("mode", "light");
  iconDark.classList.remove("active");
  iconLight.classList.add("active");
}
function darkMode() {
  let body = document.querySelector(":root");
  body.style.setProperty("--main-color", "#212529");
  body.style.setProperty("--background-color", "#03071e");
  body.style.setProperty("--text-color", "#fffffc");
  body.style.setProperty("--alert-color", "#ffd60a");
  body.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
  localStorage.setItem("mode", "dark");
  iconLight.classList.remove("active");
  iconDark.classList.add("active");
}

btnLight.addEventListener("click", lightMode);
btnDark.addEventListener("click", darkMode);

const logo = document.createElement("div");
logo.classList.add("logo");
logo.innerText = "akai";
container.appendChild(logo);

const topWrapper = document.createElement("div");
topWrapper.classList.add("top-wrapper");
container.appendChild(topWrapper);

const display = document.createElement("div");
display.classList.add("display");
topWrapper.appendChild(display);

const historyButtonsWrapper = document.createElement("div");
historyButtonsWrapper.classList.add("history-buttons-wrapper");

const playButton = document.createElement("button");
playButton.classList.add("history-button");

const playButtonIcon = document.createElement("i");
playButtonIcon.classList.add("fa-solid");
playButtonIcon.classList.add("fa-play");
playButton.appendChild(playButtonIcon);

const historyUndo = document.createElement("button");
historyUndo.classList.add("history-button");

const playButtonText = document.createElement("span");
playButtonText.innerText = "Play";
playButtonText.classList.add("history-undo-text");
playButton.appendChild(playButtonText);

historyButtonsWrapper.appendChild(playButton);

const historyUndoIcon = document.createElement("i");
historyUndoIcon.classList.add("fa-solid");
historyUndoIcon.classList.add("fa-rotate-left");
historyUndo.appendChild(historyUndoIcon);

const historyUndoText = document.createElement("span");
historyUndoText.innerText = "Undo";
historyUndoText.classList.add("history-undo-text");
historyUndo.appendChild(historyUndoText);

historyButtonsWrapper.appendChild(historyUndo);

const historyClearAll = document.createElement("button");
historyClearAll.classList.add("history-button");

const historyClearAllIcon = document.createElement("i");
historyClearAllIcon.classList.add("fa-solid");
historyClearAllIcon.classList.add("fa-xmark");
historyClearAll.appendChild(historyClearAllIcon);

const historyClearAllText = document.createElement("span");
historyClearAllText.innerText = "clear all";
historyClearAllText.classList.add("history-undo-text");
historyClearAll.appendChild(historyClearAllText);

historyButtonsWrapper.appendChild(historyClearAll);

topWrapper.appendChild(historyButtonsWrapper);

let save = [];

let localSave = localStorage.getItem("pad");
let newLocalSave = JSON.parse(localSave);

if (newLocalSave !== null) {
  newLocalSave.forEach((element) => {
    const localHistory = document.createElement("img");
    localHistory.classList.add("history");
    localHistory.src = `./img/${element}.png`;
    display.appendChild(localHistory);
    save.push(`${element}`);
  });
}

const pads = [
  { name: "clap", letter: "W" },
  { name: "hihat", letter: "S" },
  { name: "kick", letter: "D" },
  { name: "openhat", letter: "F" },
  { name: "boom", letter: "G" },
  { name: "ride", letter: "H" },
  { name: "snare", letter: "J" },
  { name: "tom", letter: "K" },
  { name: "tink", letter: "L" },
];

pads.forEach((pad) => {
  const button = document.createElement("button");
  button.classList.add("button");
  button.setAttribute("id", `${pad.name}`);

  const letterBtn = document.createElement("p");
  letterBtn.innerText = `${pad.letter}`;

  const nameBtn = document.createElement("h1");
  nameBtn.innerText = `${pad.name}`;
  const icon = document.createElement("img");
  icon.classList.add("icon");
  icon.src = `./img/icons/${pad.name}.png`;

  button.appendChild(nameBtn);
  button.appendChild(icon);
  button.appendChild(letterBtn);
  container.appendChild(button);

  const audio = document.createElement("audio");
  audio.src = `./samples/${pad.name}.wav`;
  container.appendChild(audio);

  button.addEventListener("click", () => {
    const history = document.createElement("img");
    history.classList.add("history");
    history.src = `./img/${pad.name}.png`;
    display.appendChild(history);
    save.push(`${pad.name}`);
    localStorage.setItem("pad", JSON.stringify(save));
    audio.play();
  });
});

const keyboardAudio = document.createElement("audio");

document.addEventListener("keydown", (e) => {
  const history = document.createElement("img");
  history.classList.add("history");

  function pushKey(padValue) {
    const padId = document.getElementById(`${padValue}`);
    padId.animate(
      [
        { border: "solid 1px var(--border)" },
        { border: "solid 5px var(--active)" },
      ],
      {
        duration: 300,
      }
    );
    padId.querySelector("p").animate([{ opacity: ".1" }, { opacity: "1" }], {
      duration: 300,
    });
    history.src = `./img/${padValue}.png`;
    display.appendChild(history);
    keyboardAudio.src = `./samples/${padValue}.wav`;
    save.push(`${padValue}`);
    localStorage.setItem("pad", JSON.stringify(save));
    keyboardAudio.play();
  }

  switch (true) {
    case e.code === "KeyW":
      pushKey("clap");
      break;
    case e.code === "KeyS":
      pushKey("hihat");
      break;
    case e.code === "KeyD":
      pushKey("kick");
      break;
    case e.code === "KeyF":
      pushKey("openhat");
      break;
    case e.code === "KeyG":
      pushKey("boom");
      break;
    case e.code === "KeyH":
      pushKey("ride");
      break;
    case e.code === "KeyJ":
      pushKey("snare");
      break;
    case e.code === "KeyK":
      pushKey("tom");
      break;
    case e.code === "KeyL":
      pushKey("tink");
      break;
    case e.code === "Backspace":
      undo();
      historyUndo.animate(
        [
          { backgroundColor: "var(--alert-color)" },
          { backgroundColor: "#fffffc" },
        ],
        {
          duration: 300,
        }
      );
      break;
    case e.code === "Delete":
      clearAll();
      historyClearAll.animate(
        [
          { backgroundColor: "var(--alert-color)" },
          { backgroundColor: "#fffffc" },
        ],
        {
          duration: 300,
        }
      );
      break;
    case e.code === "KeyP":
      playHistory();
      playButton.animate(
        [
          { backgroundColor: "var(--alert-color)" },
          { backgroundColor: "#fffffc" },
        ],
        {
          duration: 300,
        }
      );
      break;
  }
});

function undo() {
  const lastChild = document.querySelectorAll(".history");
  const arrLastChild = Array.from(lastChild);
  arrLastChild.pop();
  save.pop();
  localStorage.setItem("pad", JSON.stringify(save));
  while (display.hasChildNodes()) {
    display.removeChild(display.firstChild);
  }
  arrLastChild.forEach((element) => {
    const currentHistory = document.createElement("img");
    currentHistory.setAttribute("src", `${element.currentSrc}`);
    currentHistory.classList.add("history");
    display.appendChild(currentHistory);
  });
}
historyUndo.addEventListener("click", undo);

function clearAll() {
  const allHistory = document.querySelectorAll(".history");
  let arrAllHistory = Array.from(allHistory);
  arrAllHistory = [];
  save = [];
  localStorage.setItem("pad", JSON.stringify(save));
  while (display.hasChildNodes()) {
    display.removeChild(display.firstChild);
  }
}
historyClearAll.addEventListener("click", clearAll);

function playHistory() {
  if (save.length > 0) {
    let audio = document.createElement("audio");
    audio.setAttribute("src", `./samples/${save[0]}.wav`);
    let pad = document.getElementById(`${save[0]}`);
    pad.animate(
      [
        { border: "solid 1px var(--border)" },
        { border: "solid 5px var(--active)" },
      ],
      {
        duration: 300,
      }
    );
    audio.play();
    let index = 1;
    audio.addEventListener("ended", () => {
      if (index < save.length) {
        audio.setAttribute("src", `./samples/${save[index]}.wav`);
        audio.play();
        let pad = document.getElementById(`${save[index]}`);
        pad.animate(
          [
            { border: "solid 1px var(--border)" },
            { border: "solid 5px var(--active)" },
          ],
          {
            duration: 300,
          }
        );
        index++;
      }
    });
  } else {
    alert("You should play something first");
  }
}
playButton.addEventListener("click", playHistory);

app.appendChild(container);
