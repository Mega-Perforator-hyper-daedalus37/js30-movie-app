import { createElement } from "../create/createElement.js";

export const createMain = () => {
  const main = document.createElement("main");
  const mainContainer = createElement({
    elementClass: ["container", "main-container"],
    parent: main,
  });
  return { mainContainer, main };
};
