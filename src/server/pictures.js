import { createElement } from "../create/createElement.js";

export const createPictures = (data, mainContainer) => {
  mainContainer.replaceChildren();
  for (let index = 0; index < data.results.length; index++) {
    console.log(index);

    createElement({
      elementClass: ["picture"],
      parent: mainContainer,
      attribute: [
        {
          attribute: "style",
          value: `background-image: url(${data.results[index].urls.regular})`,
        },
      ],
    });
  }
};
