# Drum kit
> This project is a drum kit with a design-inspired Akai MPC.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Contact](#contact)


## General Information
The main goal of this project was a create an application, that would be a drum kit simulator. This application allows users to play sounds by using the keyboard or mouse. Project created to pass JavaScript exam.


## Technologies Used
- JavaScript,
- SCSS / CSS,
- HTML.


## Features
The user can play a sound by clicking a button or pressing a key on the keyboard. Keys description:
- "W" - Clap,
- "S" - Hihat,
- "D" - Kick,
- "F" - Openhat,
- "G" - Boom,
- "H" - Ride,
- "J" - Snare,
- "K" - Tom,
- "L" - Tink.
The top display shows a history of key presses. Application is responsive to 375px.
![Example screenshot](./screenshots/1.png)


## Setup
[Click here](https://arkbog.github.io/drumkit/) and enjoy your beat!


## Usage

```
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
```

The alert is created in these lines. Two div's have been created because a flexbox has been used to split the alert into two parts.

```
function closeAlert() {
  alertBlock.style.display = "none";
}

alertClose.addEventListener("click", closeAlert);
```
In these lines there is a function to close an alert and a listener function that runs after clicking an "X".

```
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
```
This array contains objects that have a drum name and an associated key.

```
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
  icon.src = `./img/${pad.name}.png`;

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
```
In this forEach are created a buttons to play a sound by mouse. Firstly are created a buttons with class button and id responds to pad.name. The next lines create an audio tag for each button. The next step are to add a listener to each button. In callback is created an img that represents a pad icon. The last line is a function to play an audio.

```
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
```
This block of code is for the creation of a function which will play a sound from the keyboard. The first step is to create an audio tag. The next step is to add a listener to the audio tag. The listener gets an event (e). In the callback a img is created which represents an icon pad. In the next lines we create an animation for buttons after pressing a key. The next step is to set an audio source and play a sound using the play() function. The next code block is a switch. The switch has a cases that responds when a key is pressed




## Project Status
Project is: complete.


## Contact
Created by [@ArkBog](https://github.com/ArkBog)

