import { createElement } from "../create/createElement.js";
import { state } from "./globalVarieble.js";

export const createPictures = (data, mainContainer) => {
  mainContainer.replaceChildren();
  for (let index = 0; index < data.results.length; index++) {
    console.log(index);
    const picture = createElement({
      elementClass: ["picture-container"],
      parent: mainContainer,
      eventObj: {
        event: "mouseover",
        callbackFn: () => {
          pictureBottom.style.transform = "translateY(-100%)";
        },
      },
    });
    picture.addEventListener("mouseout", () => {
      pictureBottom.style.transform = "translateY(0%)";
    });
    const pictureItSelf = createElement({
      elementClass: ["picture"],
      parent: picture,
      attribute: [
        {
          attribute: "style",
          value: `background-image: url(${data.results[index].urls.regular})`,
        },
      ],
    });

    const pictureBottom = createElement({
      elementClass: ["bottom-bar"],
      parent: picture,
    });
    createElement({
      tag: "a",
      elementClass: ["download-button"],
      parent: pictureBottom,
      attribute: [
        {
          attribute: "href",
          value: data.results[index].links.download,
        },
        {
          attribute: "download",
          value: state.search,
        },
      ],
      eventObj: {
        event: "click",
        callbackFn: () => {
          // const blob = new Blob([data.results[index].links.download_location urls.full], {
          //   type: "octet-stream",
          // });
          // const href = URL.createObjectURL(blob);
          // const a = Object.assign(document.createElement("a"), {
          //   href,
          //   style: "display:none",
          //   download: state.search,
          // });
          // document.body.appendChild(a);
          // a.click();
          // URL.revokeObjectURL(href);
          // a.remove();
        },
      },
    });
  }
};
