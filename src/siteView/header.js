import { createElement } from "../create/createElement.js";
import { getData } from "../server/getData.js";
import { state, stateKey } from "../server/globalVarieble.js";
import { createPictures } from "../server/pictures.js";
import { sideBar } from "./settingsBar.js";

export let settingsButton;

export function createHeader(data, mainContainer, url) {
  const header = createElement({
    tag: "header",
    parent: document.body,
  });
  const headerContainer = createElement({
    parent: header,
    elementClass: ["container", "header-container"],
  });
  createElement({
    tag: "h1",
    parent: headerContainer,
    text: "Gallery",
  });
  const searchBox = createElement({
    tag: "form",
    parent: headerContainer,
    elementClass: ["search-box"],
    eventObj: {
      event: "submit",
      callbackFn: async (event) => {
        event.preventDefault();
        state.search = search.value;
        localStorage.setItem(stateKey, JSON.stringify(state));
        url = `https://api.unsplash.com/search/photos?query=${state.search}&per_page=30&orientation=landscape&client_id=kDtwf0XCWb5yvNQOIqPhVrgf2hmSYIC6j3o3z2rrPS8`;
        data = await getData(url);
        createPictures(data, mainContainer);
      },
    },
  });
  const search = createElement({
    tag: "input",
    parent: searchBox,
    elementClass: ["search"],
    attribute: [
      { attribute: "type", value: "text" },
      { attribute: "autofocus" },
      { attribute: "placeholder", value: "search" },
    ],
  });
  createElement({
    tag: "button",
    parent: searchBox,
    elementClass: ["search-img"],
    attribute: [
      {
        attribute: "type",
        value: "submit",
      },
    ],
  });

  settingsButton = createElement({
    tag: "img",
    elementClass: ["settings"],
    parent: searchBox,
    attribute: [
      { attribute: "src", value: "../assets/settings.svg" },
      { attribute: "alt", value: "settings" },
    ],
  });
  sideBar();
}
