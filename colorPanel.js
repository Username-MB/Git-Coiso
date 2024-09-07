const colorButton = document.getElementById("colorButton");

let isPanelopen = false;

function showPanel() {
  const panel = document.createElement("div");
  panel.setAttribute("id", "colorButtonPanel");

  // Create the paragraph
  const paragraph = document.createElement("p");
  paragraph.textContent = "Pick a Color";

  // Create the input container div
  const inputContainer = document.createElement("div");

  // Create the input field with a placeholder
  const colorInput = document.createElement("input");
  colorInput.setAttribute("type", "text");
  colorInput.setAttribute("id", "colorInput");
  colorInput.setAttribute("placeholder", "#FFFFFF");

  // Create the "Set" button and add an onclick event
  const setButton = document.createElement("button");
  setButton.setAttribute("type", "button");
  setButton.setAttribute("id", "botao");
  setButton.textContent = "Set";
  setButton.onclick = setColor; // Assign setColor function to onclick event

  // Append input and set button to the input container
  inputContainer.appendChild(colorInput);
  inputContainer.appendChild(setButton);

  // Create the "Return to default" button
  const returnButton = document.createElement("button");
  returnButton.setAttribute("type", "button");
  returnButton.setAttribute("id", "botao");
  returnButton.textContent = "Return to default";

  // Append the paragraph, input container, and return button to the main panel
  panel.appendChild(paragraph);
  panel.appendChild(inputContainer);
  panel.appendChild(returnButton);

  // Append the panel to the body (or any other container)
  document.body.appendChild(panel);
  setTimeout(() => {
    panel.classList.add("fadeIn");
  }, 5);
}


function setColor() {
  const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const colorInput = document.getElementById("colorInput");
  var color = colorInput.value;

  if (colorRegex.test(color)) {
    console.log("a");
  }
}

colorButton.addEventListener("click", () => showPanel(), (isPanelopen = true));
