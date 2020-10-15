export const createTimer = (TimeElement) => {
  const display = document.getElementById("display");
  const timeList = document.getElementById("time-list");
  let timer;
  let previousTime;
  let startpausedTime;

  const setDisplayTime = (display, diferens = 0) => {
    display.innerHTML = TimeElement(diferens);
  };

  const startTimer = () => {
    timer = setInterval(() => {
      setDisplayTime(display, Date.now() - previousTime);
    }, 50);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  return {
    display,
    clear() {
      setDisplayTime(display);
      timeList.innerHTML = "";
    },
    pause() {
      stopTimer();
      startpausedTime = Date.now();
    },
    start() {
      previousTime = Date.now();
      startTimer();
    },
    continue() {
      previousTime = previousTime + (Date.now() - startpausedTime);
      startTimer();
    },
    addToList() {
      timeList.innerHTML =
        TimeElement(Date.now() - previousTime, "small") + timeList.innerHTML;
      return this;
    },
  };
};
