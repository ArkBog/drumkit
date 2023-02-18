const app = document.querySelector("#app");

const container = document.createElement("div");
container.classList.add("container");



const alertBlock = document.createElement("div");
alertBlock.classList.add("alert");
app.appendChild(alertBlock);

const alertText = document.createElement("div");
alertText.classList.add("alert-text");
alertBlock.innerText = "Bringing the power of a full drum set to your fingertips, anytime, anywhere. Click or press key to play a sound.";
alertBlock.appendChild(alertText);

const alertClose = document.createElement("div");
alertClose.classList.add("alert-close");
alertClose.innerText = "X";
alertBlock.appendChild(alertClose);

function closeAlert(){
  alertBlock.style.display = "none"
};

alertClose.addEventListener("click", closeAlert);

const logo = document.createElement("div");
logo.classList.add("logo");
logo.innerText = "akai";
container.appendChild(logo);


const display = document.createElement("div");
display.classList.add("display");
container.appendChild(display);


const pads = [{name: "clap", letter: "W"}, {name: "hihat", letter: "S"}, {name: "kick", letter: "D"}, {name: "openhat", letter: "F"}, {name: "boom", letter: "G"}, {name: "ride", letter: "H"}, {name: "snare", letter: "J"}, {name:"tom", letter: "K"}, {name: "tink", letter: "L"}];

pads.forEach((pad) =>{
  const button = document.createElement("button");
  button.classList.add("button");
  button.setAttribute("id", `${pad.name}`);

  const letterBtn = document.createElement("p");
  letterBtn.innerText = `${pad.letter}`;

  const nameBtn = document.createElement("h1");
  nameBtn.innerText = `${pad.name}`;
  const icon = document.createElement("img");
  icon.classList.add("icon");
  icon.src = `/img/${pad.name}.png`;
  
 

  button.appendChild(nameBtn);
  button.appendChild(icon);
  button.appendChild(letterBtn);
  container.appendChild(button);

  const audio = document.createElement("audio");
  audio.src = `/samples/${pad.name}.wav`;
  container.appendChild(audio);

  
    
  

  button.addEventListener("click", () =>{
    const history = document.createElement("img");
    history.classList.add("history");
    history.src = `/img/${pad.name}.png`
    display.appendChild(history);
    audio.play();
  });
});

const keyboardAudio = document.createElement("audio");

document.addEventListener("keydown", (e) => {
  const history = document.createElement("img");
  history.classList.add("history");

  
  switch(true){
    case (e.code === "KeyW"):
      document.getElementById("clap").animate([
        { border: 'solid 1px var(--border)' },
        { border: 'solid 5px var(--active)' }
      ], {
        duration: 300,
      });
      document.getElementById("clap").querySelector("p").animate([
        { opacity: '.1' },
        { opacity: '1' }
      ], {
        duration: 300,
      });
      history.src = `/img/clap.png`
      display.appendChild(history);
      keyboardAudio.src = "/samples/clap.wav"; 
      keyboardAudio.play();
      // 
      break;
    case (e.code === "KeyS"):
      document.getElementById("hihat").animate([
        { border: 'solid 1px var(--border)' },
        { border: 'solid 5px var(--active)' }
      ], {
        duration: 300,
      });
      document.getElementById("hihat").querySelector("p").animate([
        { opacity: '.1' },
        { opacity: '1' }
      ], {
        duration: 300,
      });
      history.src = `/img/hihat.png`
      display.appendChild(history);
      keyboardAudio.src = "/samples/hihat.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyD"):
      document.getElementById("kick").animate([
        { border: 'solid 1px var(--border)' },
        { border: 'solid 5px var(--active)' }
      ], {
        duration: 300,
      });
      document.getElementById("kick").querySelector("p").animate([
        { opacity: '.1' },
        { opacity: '1' }
      ], {
        duration: 300,
      });
      history.src = `/img/kick.png`
      display.appendChild(history);
      keyboardAudio.src = "/samples/kick.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyF"):
      document.getElementById("openhat").animate([
        { border: 'solid 1px var(--border)' },
        { border: 'solid 5px var(--active)' }
      ], {
        duration: 300,
      });
      document.getElementById("openhat").querySelector("p").animate([
        { opacity: '.1' },
        { opacity: '1' }
      ], {
        duration: 300,
      });
      history.src = `/img/openhat.png`
      display.appendChild(history);
      keyboardAudio.src = "/samples/openhat.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyG"):
      document.getElementById("boom").animate([
        { border: 'solid 1px var(--border)' },
        { border: 'solid 5px var(--active)' }
      ], {
        duration: 300,
      });
      document.getElementById("boom").querySelector("p").animate([
        { opacity: '.1' },
        { opacity: '1' }
      ], {
        duration: 300,
      });
      history.src = `/img/boom.png`
      display.appendChild(history);
      keyboardAudio.src = "/samples/boom.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyH"):
      document.getElementById("ride").animate([
        { border: 'solid 1px var(--border)' },
        { border: 'solid 5px var(--active)' }
      ], {
        duration: 300,
      });
      document.getElementById("ride").querySelector("p").animate([
        { opacity: '.1' },
        { opacity: '1' }
      ], {
        duration: 300,
      });
      history.src = `/img/ride.png`
      display.appendChild(history);
      keyboardAudio.src = "/samples/ride.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyJ"):
      document.getElementById("snare").animate([
        { border: 'solid 1px var(--border)' },
        { border: 'solid 5px var(--active)' }
      ], {
        duration: 300,
      });
      document.getElementById("snare").querySelector("p").animate([
        { opacity: '.1' },
        { opacity: '1' }
      ], {
        duration: 300,
      });
      history.src = `/img/snare.png`
      display.appendChild(history);
      keyboardAudio.src = "/samples/snare.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyK"):
      document.getElementById("tom").animate([
        { border: 'solid 1px var(--border)' },
        { border: 'solid 5px var(--active)' }
      ], {
        duration: 300,
      });
      document.getElementById("tom").querySelector("p").animate([
        { opacity: '.1' },
        { opacity: '1' }
      ], {
        duration: 300,
      });
      history.src = `/img/tom.png`
      display.appendChild(history);
      keyboardAudio.src = "/samples/tom.wav";
      keyboardAudio.play(); 
      break;
    case (e.code === "KeyL"):
      document.getElementById("tink").animate([
        { border: 'solid 1px var(--border)' },
        { border: 'solid 5px var(--active)' }
      ], {
        duration: 300,
      });
      document.getElementById("tink").querySelector("p").animate([
        { opacity: '.1' },
        { opacity: '1' }
      ], {
        duration: 300,
      });
      history.src = `/img/tink.png`
      display.appendChild(history);
      keyboardAudio.src = "/samples/tink.wav";
      keyboardAudio.play(); 
      break;
  }
});


app.appendChild(container);
