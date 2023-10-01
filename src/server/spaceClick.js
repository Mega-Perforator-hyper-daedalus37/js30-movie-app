export const spaceClick = (data) => {
  addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      console.log(data);
      data.page = ++data.page;
    }
  });
};
