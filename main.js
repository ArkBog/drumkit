const app = document.querySelector("#app");

const container = document.createElement("div");
container.classList.add("container");

for (let i = 0; i < 9; i++) {
  let button = document.createElement("button");
  button.classList.add("button");
  button.setAttribute("value", `${[i]}`);

  container.appendChild(button);
};

function playAudio(){
  
    kick.play();
};

function myAlert(){
  alert("działa")
};

app.appendChild(container);

const pads = document.getElementsByClassName("button");
console.log(pads);
const kick = pads[0];

console.log(kick);

kick.addEventListener("click", playAudio);