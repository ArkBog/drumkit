const app = document.querySelector("#app");

const container = document.createElement("div");
container.classList.add("container");

for (let i = 0; i < 9; i++) {
  let button = document.createElement("button");
  button.classList.add("button");

  container.appendChild(button);
}

app.appendChild(container);
