const localStoragePrefix = "bogdan_daedalus";
export const stateKey = `${localStoragePrefix}_state`;
export const userDataKey = `${localStoragePrefix}_userData`;

export let state = {
  search: "",
};
export function stateOnload(stateData) {
  state = stateData;
}
export function updateState(updatedState) {
  state = { ...state, ...updatedState };
}

export function updateSearch(updatedSearch) {
  state.search = updatedSearch;
  console.log(state);
}
