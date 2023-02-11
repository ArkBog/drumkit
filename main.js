const app = document.querySelector("#app");

const container = document.createElement("div");
container.classList.add("container");

const pads = [{name: "clap", letter: "W"}, {name: "hihat", letter: "S"}, {name: "kick", letter: "D"}, {name: "openhat", letter: "F"}, {name: "boom", letter: "G"}, {name: "ride", letter: "H"}, {name: "snare", letter: "J"}, {name:"tom", letter: "K"}, {name: "tink", letter: "L"}];

pads.forEach((pad) =>{
  const button = document.createElement("button");
  button.classList.add("button");

  const letterBtn = document.createElement("p");
  letterBtn.innerText = `${pad.letter}`;

  const nameBtn = document.createElement("h1");
  nameBtn.innerText = `${pad.name}`;


  button.appendChild(nameBtn);
  button.appendChild(letterBtn);
  container.appendChild(button);

  const audio = document.createElement("audio");
  audio.src = `/samples/${pad.name}.wav`;
  container.appendChild(audio);

  button.addEventListener("click", () =>{
    audio.play();
  });
});

const keyboardAudio = document.createElement("audio");

document.addEventListener("keydown", (e) => {
  switch(true){
    case (e.code === "KeyW"):
      keyboardAudio.src = "/samples/clap.wav"; 
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyS"):
      keyboardAudio.src = "/samples/hihat.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyD"):
      keyboardAudio.src = "/samples/kick.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyF"):
      keyboardAudio.src = "/samples/openhat.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyG"):
      keyboardAudio.src = "/samples/boom.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyH"):
      keyboardAudio.src = "/samples/ride.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyJ"):
      keyboardAudio.src = "/samples/snare.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyK"):
      keyboardAudio.src = "/samples/tom.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyL"):
      keyboardAudio.src = "/samples/tink.wav";
      keyboardAudio.play(); 
      break;
  }
});

app.appendChild(container);