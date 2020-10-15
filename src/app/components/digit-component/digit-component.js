export const Digit = (digit = "0") => {
  const shouldShowTotLine = ["0", "2", "3", "5", "6", "7", "8", "9"].includes(
    digit
  );
  const shouldShowBottomLine = ["0", "2", "3", "5", "6", "8", "9"].includes(
    digit
  );
  const shouldShowMiddleLine = ["2", "3", "4", "5", "6", "8", "9"].includes(
    digit
  );
  const shouldShowTotLeftLine = ["0", "4", "5", "6", "8", "9"].includes(digit);
  const shouldShowBottomLeftLine = ["0", "2", "6", "8"].includes(digit);
  const shouldShowTotRightLine = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "7",
    "8",
    "9",
  ].includes(digit);
  const shouldShowBottomRightLine = [
    "0",
    "1",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ].includes(digit);
  return `
  <div class="digit">
    <div class="digit__row digit__row--horizontal">
      <div></div>
      <div class="digit__line ${
        shouldShowTotLine ? "digit__line--active" : ""
      }"></div>
      <div></div>
    </div>
    <div class="digit__row digit__row--vertical">
      <div class="digit__line ${
        shouldShowTotLeftLine ? "digit__line--active" : ""
      }"></div>
      <div></div>
      <div class="digit__line ${
        shouldShowTotRightLine ? "digit__line--active" : ""
      }"></div>
    </div>
    <div class="digit__row digit__row--horizontal">
      <div></div>
      <div class="digit__line ${
        shouldShowMiddleLine ? "digit__line--active" : ""
      }"></div>
      <div></div>
    </div>
    <div class="digit__row digit__row--vertical">
      <div class="digit__line ${
        shouldShowBottomLeftLine ? "digit__line--active" : ""
      }"></div>
      <div></div>
      <div class="digit__line ${
        shouldShowBottomRightLine ? "digit__line--active" : ""
      }"></div>
    </div>
    <div class="digit__row digit__row--horizontal">
      <div></div>
      <div class="digit__line ${
        shouldShowBottomLine ? "digit__line--active" : ""
      }"></div>
      <div></div>
    </div>
  </div>`;
};
