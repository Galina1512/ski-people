import { API_URL_img } from "../js/const";
import { layout } from "./layout";
import { localStorageLoad } from "../js/localstorage";

let rendered = false;

export const productList = (title, data, parent) => {
    if (title === 'remove') {
        document.querySelector('.goods').remove();
        rendered = false;
        return; 
    }

    if (rendered) {
        return '';
    }
    const favoriteList = localStorageLoad('ski-people-favorite');
    
    let goodsItem = '';

    const render = (data, result) => {
        data.forEach(({name, price, img, id}) => {
            result += `
            <li class="goods__item">
                <article class="goods__card card">
                    <a href="/product" class="card__link">
                        <img
                        src="${API_URL_img}${img}"
                        alt="foto"
                        class="card__image" />
                    </a>
                  <button class="card__like-button" type="button" data-id ="${id}">
                    <svg class="card__like-svg ${favoriteList.find(item => item.id === id) ? "card__like-svg_active" : ""}" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.4135 13.8733C8.18683 13.9533 7.8135 13.9533 7.58683 13.8733C5.6535 13.2133 1.3335 10.46 1.3335 5.79332C1.3335 3.73332 2.9935 2.06665 5.04016 2.06665C6.2535 2.06665 7.32683 2.65332 8.00016 3.55998C8.6735 2.65332 9.7535 2.06665 10.9602 2.06665C13.0068 2.06665 14.6668 3.73332 14.6668 5.79332C14.6668 10.46 10.3468 13.2133 8.4135 13.8733Z" 
                    fill="currentColor" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
    
                <div class="card__info">
                    <h3 class="card__info-title">${name}</p>
                    <p class="card__info-price"> ${price} ₽</p>
                </div>
                <button class="card__button">В корзину</button>
                </article>
            </li>
            `
                    });
        return result;
    
    }

    const el = document.createElement('section');
    el.classList.add('goods');

    const child = `
    <h2 class="goods__title">${title}</h2>
    <ul class="goods__list">
    ${render(data, goodsItem)}
    </ul>
    `;

    el.append(layout(child, 'goods__container'));
    parent.append(el);
    rendered = true;

    const catalogButton = document.querySelector('.catalog');
    if (catalogButton) {
        catalogButton.addEventListener('click', (e) => {
            if (e.target.matches('a')) {
                e.target.classList.add('catalog__link_active'); 
        }

        const refreshList = data.filter(item => item.type === e.target.textContent.trim());

        const list = document.querySelector('.goods__list');
        list.textContent = '';

        goodsItem = '';
        goodsItem = render(refreshList, goodsItem);

        if(e.target.textContent === 'Все') {
            goodsItem = '';
            goodsItem = render(data, goodsItem);
        }
            list.innerHTML = goodsItem;
        });
    }
    return el;
}
