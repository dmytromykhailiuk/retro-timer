import "./main.scss";
import { app } from "./app/app.js";

const root = document.getElementById("root");

const initialTemplate = `
  <div id="display" class="interface"></div>
  <div class="controller">
    <div class="controller__wrapper">
      <button id="set-btn" class="disabled">SET</button>
      <button id="run-btn">START</button>
    </div>
  </div>
  <div id="time-list"></div>
`;

root.innerHTML = initialTemplate;

app();
