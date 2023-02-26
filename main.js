const app = document.querySelector("#app");

const docTitle = document.title;

window.addEventListener("blur", () =>{
  document.title = "Come back ♫"
});
window.addEventListener("focus", () =>{
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

const buttonModeSwitch = document.createElement("label");
buttonModeSwitch.classList.add("switch");

const buttonModeSlider = document.createElement("span");
buttonModeSlider.classList.add("slider");

const btnDark = document.createElement("i");
const btnLight = document.createElement("i");
btnDark.classList.add("fa-solid");
btnDark.classList.add("fa-moon");
btnLight.classList.add("fa-solid");
btnLight.classList.add("fa-sun");
buttonModeSlider.appendChild(btnDark);
buttonModeSlider.appendChild(btnLight);

let buttonMode = document.createElement("input");
buttonMode.setAttribute("type", "checkbox");

buttonModeSwitch.appendChild(buttonMode);
buttonModeSwitch.appendChild(buttonModeSlider);
container.appendChild(buttonModeSwitch);

let lightModeOn = localStorage.getItem("lightModeOn");
console.log(lightModeOn);

if (lightModeOn === true){
  buttonMode.checked = true;
  lightMode();
}
else {
  buttonMode.checked = false;
  darkMode();
}

function lightMode() {
  const body = document.querySelector(":root");
  body.style.setProperty("--main-color", "#fffffc");
  body.style.setProperty("--background-color", "#ffd60a");
  body.style.setProperty("--text-color", "#212529");
  body.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
  lightModeOn = localStorage.setItem("lightModeOn", "true");
}
function darkMode() {
  const body = document.querySelector(":root");
  body.style.setProperty("--main-color", "#212529");
  body.style.setProperty("--background-color", "#03071e");
  body.style.setProperty("--text-color", "#fffffc");
  body.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
  lightModeOn = localStorage.setItem("lightModeOn", "false");
}


buttonMode.addEventListener("change", () => {
  if (buttonMode.checked) {
    lightMode();
  } else darkMode();
});



const logo = document.createElement("div");
logo.classList.add("logo");
logo.innerText = "akai";
container.appendChild(logo);

const display = document.createElement("div");
display.classList.add("display");
container.appendChild(display);

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
  }
});

app.appendChild(container);
