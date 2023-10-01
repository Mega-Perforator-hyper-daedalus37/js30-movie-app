import { createElement } from "../create/createElement.js";
import { settingsButton } from "./header.js";

export const sideBar = () => {
  let sideBarSlide = false;
  const sideBarTab = createElement({
    elementClass: ["side-bar"],
    parent: document.body,
  });
  settingsButton.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    const callback = (event) => {
      if (!event.composedPath().includes(sideBarTab)) {
        sideBarSlide = false;
        sideBarTab.style.transform = "translateX(100%)";
        settingsButton.style.transform = "rotate(0turn)";
        document.onclick = null;
        return;
      }
    };

    document.onclick = callback;
    if (!sideBarSlide) {
      sideBarSlide = true;
      settingsButton.style.transform = "rotate(0.25turn)";
      sideBarTab.style.transform = "translateX(0%)";
      return;
    }

    if (sideBarSlide) {
      sideBarSlide = false;
      sideBarTab.style.transform = "translateX(100%)";
      settingsButton.style.transform = "rotate(0turn)";
      document.onclick = null;
      return;
    }

    console.log(sideBarSlide);
  });
  return sideBarTab;
};
