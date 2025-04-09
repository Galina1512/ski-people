import { layout } from "./layout";

let rendered = false;

export const productList = (title, data, parent) => {
    
    if (rendered) {
        return '';
    }

    let goodsItem = '';

    data.forEach(({ manufacturer, price }) => {
     goodsItem += `
        <li class="goods__item">
           <article class="goods__card card">
            <a href="#" class="card__link">
                <img 
                src="/img/photo.png" 
                alt="изображение лыж" 
                class="card__image"
                />
            </a>
            <button class="card__like-button" type="button">
                <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.41325 13.8733C8.18658 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32658 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z" 
                fill="white" 
                stroke="#1C1C1C" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                />
                </svg>
            </button>

            <div class="card__info">
                <h3 class="card__info-title">${manufacturer}</h3>
                <p class="card__info-price">${price}</p>
            </div>

            <button class="card__button">В корзину</button>
          </article>
        </li>
        `;
        
    });

    const el = document.createElement('section');
    el.classList.add('goods');

    const child = `
    <h2 class="goods__title" >${title}</h2>
    <ul class="goods__list">
        ${goodsItem}
    </ul>
    `;

    el.append(layout(child, 'goods__container'));
    document.body.append(el);
    parent.append(el);

    rendered = true;

    const catalogButton = document.querySelector('.catalog');
    if (catalogButton) {
        catalogButton.addEventListener('click', (e) => {
            if (e.target.matches('a')) {
                e.target.classList.add('catalog__link_active');
            }

        const refreshList = data.filter(item => item.type === e.target.textContent);
        console.log("refreshList", refreshList);

        const list = document.querySelector('.goods__list');
        list.textContent = '';
        goodsItem = '';

        refreshList.forEach(({ manufacturer, price }) => {
            goodsItem += `
        <li class="goods__item">
        <article class="goods__card card">
        <a href="#" class="card__link">
            <img src="/img/photo.png" alt="изображение лыж" class="card__image">
        </a>
        <button class="card__like-button" type="button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.41325 13.8733C8.18658 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32658 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="card__info">
            <h3 class="card__info-title">${manufacturer}</h3>
            <p class="card__info-price">${price}</p>
        </div>
        <button class="card__button">В корзину</button>
        </article>
        </li> `
        });

        // if (e.target.textContent === 'Все') {
        //     const refreshList = data;
        //     return refreshList;  
        // }

        list.innerHTML = goodsItem;
    });

    return el;
}};