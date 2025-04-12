import { localSrorageSave, localStorageLoad } from './localstorage';

export const addFavorite = async (data) => {
  const favoriteList = localStorageLoad('ski-people-favorite');
  const list = document.querySelector('.goods__list');

  if (list) {
    list.addEventListener('click', e => {
        if (e.target.closest('.card__like-button')) {
            const id = Number(e.target.parentNode.parentNode.dataset.id);
            const item = data.find(item => item.id === id);
            
            if (favoriteList.length === 0) {
                favoriteList.push(item);
                localSrorageSave('ski-people-favorite', favoriteList);
            } else {
                thereIs = false;
                favoriteList.forEach((favoriteItem, index) => {
                    if (favoriteItem.id === id) {
                        thereIs = true;
                        favoriteList.splice(index, 1)
                        localSrorageSave('ski-people-favorite', favoriteList);
                    } 
                });
                if (!thereIs) {
                    favoriteList.push(item);
                    localSrorageSave('ski-people-favorite', favoriteList);

                }
            }
        }
    });
  };
};