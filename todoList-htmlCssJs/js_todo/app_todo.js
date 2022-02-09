import { declareEvents } from "./eventsView.js";
import { checkLocal } from "./tasksManger.js";

window.onload = () => {
  init();
}

const init = () => {
  declareEvents();
  checkLocal();
}