import { layout } from "./layout";
let rendered = false;

export const catalog = (action, parent, data = []) => {
    if (action === 'remove') {
        document.querySelector('.catalog').remove();
        rendered = false;
        return; 
    }
    if (rendered) {
        return document.querySelector('.catalog');
    };

const el = document.createElement('div');
el.classList.add('catalog');

const typeList = [];

data.map(({type}) => typeList.push(type));

let catalogItem = '';

[...new Set(typeList)].forEach(item => {
    catalogItem += `
        <li class="catalog__item">
            <a href="#" class="catalog__link">${item} </a>
        </li>
    `;
})

const child = `
    <ul class="catalog__list">
        <li class="catalog__item">
            <a href="#" class="catalog__link catalog__link_active">Все</a>
        </li>
        ${catalogItem}
    </ul>
`;

el.append(layout(child, 'catalog__container'));
parent.append(el);

rendered = true;

return el;
}



// list.addEventListener('click', ({ target }) => {
//     const likeButton = target.closest('.card__like-button');
//     if (likeButton) {
//       const id = Number(likeButton.dataset.id);
//       console.log('id: ', id);
//     }
//   });
  