export const localSrorageSave = (key, data) => localStorage.setItem(key, JSON.stringify(data));
export const localStorageLoad = key => JSON.parse(localStorage.getItem(key)) || [];
