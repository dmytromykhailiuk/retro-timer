import { DigitsGroup } from "../digits-group-component/digits-group-component.js";
import {
  getMinutesArrFromDiferens,
  getSecondsArrFromDiferens,
  getMilisecondsArrFromDiferens,
} from "../../helpers/time-helper.js";

export const TimeElement = (diferens, size = "") => {
  const minutes = getMinutesArrFromDiferens(diferens);
  const seconds = getSecondsArrFromDiferens(diferens);
  const miliseconds = getMilisecondsArrFromDiferens(diferens);
  return `${
    size && '<div class="interface interface--small">'
  }<div class="interface__wrapper">
    <div class="interface__digits-group">
      ${DigitsGroup(minutes)}
    </div>
    <div class="interface__divider"><div></div><div></div></div>
    <div class="interface__digits-group">
      ${DigitsGroup(seconds)}
    </div>
    <div class="interface__divider"><div></div><div></div></div>
    <div class="interface__digits-group">
      ${DigitsGroup(miliseconds)}
    </div>
  </div>${size && "</div>"}`;
};
