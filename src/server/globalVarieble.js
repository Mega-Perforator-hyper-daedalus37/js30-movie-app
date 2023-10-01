const localStoragePrefix = "bogdan_daedalus";
export const stateKey = `${localStoragePrefix}_state`;
export const userDataKey = `${localStoragePrefix}_userData`;

export let state = {
  search: "yes",
};

export function onload() {
  const data = localStorage.getItem(stateKey);
  updateState(JSON.parse(data));
}

export function updateState(updatedState) {
  state = { ...state, ...updatedState };
}
