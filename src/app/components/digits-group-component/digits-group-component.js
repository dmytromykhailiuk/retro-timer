import { Digit } from "../digit-component/digit-component.js.js";

export const DigitsGroup = (arr = ["0", "0"]) => {
  return `
    <div class="interface__digit interface__digit--first">${Digit(arr[0])}</div>
    <div class="interface__digit interface__digit--second">${Digit(
      arr[1]
    )}</div>`;
};
