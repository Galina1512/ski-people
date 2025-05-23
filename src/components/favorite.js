import { layout } from "./layout";

let rendered = false;

export const favorite = (action, parent, data) => {
    if (action === 'remove') {
        document.querySelector('.favorite').remove();
        rendered = false;
        return;
    }

    if (rendered) {
        return '';
    }

    const el=document.createElement('goods');
    el.classList.add('goods');
    const child = `
        <h2 class="goods__title">Избранное</h2>
        <ul class="goods__list">
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
                <h3 class="card__info-title">Горные лыжи</h3>
                <p class="card__info-price">5&nbsp;200&nbsp; ₽</p>

            </div>
            <button class="card__button">В корзину</button>
            </article>
        </li>

        </ul>
    `;

    el.append(layout(child, 'goods'));
    parent.append
    (el);

    rendered = true;

    return el;
}