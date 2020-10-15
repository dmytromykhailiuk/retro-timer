export const getMinutesArrFromDiferens = (diferens) => {
  const minutes = Math.floor(diferens / 60000);
  if (minutes >= 99) {
    return ["9", "9"];
  }
  const minutesArr = minutes.toString().split("");
  if (minutesArr.length < 2) {
    minutesArr.unshift("0");
  }
  return minutesArr;
};

export const getSecondsArrFromDiferens = (diferens) => {
  const seconds = new Date(diferens).getSeconds();
  const secondsArr = seconds.toString().split("");
  if (secondsArr.length < 2) {
    secondsArr.unshift("0");
  }
  return secondsArr;
};

export const getMilisecondsArrFromDiferens = (diferens) => {
  return (diferens / 1000).toFixed(2).toString().split(".")[1].split("");
};
