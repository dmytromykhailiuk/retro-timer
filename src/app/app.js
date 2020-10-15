import { STATE_TYPES } from "./state-types/state-types.js";
import { TimeElement } from "./shared/time-component/time-component.js";
import { createTimer } from "./timer-controller/timer-controler.js";

let CURRENT_STATE = STATE_TYPES.Start;

export const app = () => {
  const setBtn = document.getElementById("set-btn");
  const runBtn = document.getElementById("run-btn");
  const timer = createTimer(TimeElement);

  setBtn.addEventListener("click", () => {
    if (CURRENT_STATE === STATE_TYPES.Paused) {
      setBtn.classList.add("disabled");
      setBtn.innerHTML = "SET";
      CURRENT_STATE = STATE_TYPES.Start;
      timer.clear();
    } else if (CURRENT_STATE === STATE_TYPES.Continue) {
      timer.addToList();
    }
  });

  runBtn.addEventListener("click", () => {
    if (CURRENT_STATE === STATE_TYPES.Start) {
      setBtn.classList.remove("disabled");
      runBtn.innerHTML = "STOP";
      CURRENT_STATE = STATE_TYPES.Continue;
      timer.start();
    } else if (CURRENT_STATE === STATE_TYPES.Continue) {
      runBtn.innerHTML = "START";
      setBtn.innerHTML = "RESET";
      CURRENT_STATE = STATE_TYPES.Paused;
      timer.pause();
    } else if (CURRENT_STATE === STATE_TYPES.Paused) {
      runBtn.innerHTML = "STOP";
      setBtn.innerHTML = "SET";
      CURRENT_STATE = STATE_TYPES.Continue;
      timer.continue();
    }
  });

  timer.clear();
};
