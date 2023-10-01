import { getData } from "./server/getData.js";
import { onload, state } from "./server/globalVarieble.js";
import { createPictures } from "./server/pictures.js";
import { spaceClick } from "./server/spaceClick.js";
import { createMain } from "./siteView/createMain.js";
import { createHeader } from "./siteView/header.js";

const main = async () => {
  onload();
  const url = `https://api.unsplash.com/search/photos?query=${state.search}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
  const data = await getData(url);
  spaceClick(data);
  const { mainContainer, main } = createMain();
  createHeader(data, mainContainer, url);
  document.body.append(main);
  createPictures(data, mainContainer);
};
main();
