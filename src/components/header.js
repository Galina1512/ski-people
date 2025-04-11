import { layout } from "./layout";

export const header = () => {
    const el = document.createElement('header');
    el.classList.add('header');

    const child = `
    <div class="header__wrapper">
    <a href="/" title="Переход на главную страницу" aria-label="Переход на главную страницу" class="header__logo-link">
        <img src="/img/logo.svg" alt="logo" class="header__logo-image">
    </a>
    <form action="#" class="search">
        <input type="search" name="search" class="header__search-input">
        <button class="header__search-button" type="submit">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.66634 14C11.1641 14 13.9997 11.1645 13.9997 7.66671C13.9997 4.1689 11.1641 1.33337 7.66634 1.33337C4.16854 1.33337 1.33301 4.1689 1.33301 7.66671C1.33301 11.1645 4.16854 14 7.66634 14Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.6663 14.6667L13.333 13.3334" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
        </button>
    </form>
    <div class="header__links-list">
        <a href="/favorite" class="header__link">
        <span class="header__link-text">Избранное</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>

        <a href="/cart" class="header__link">
        <span class="header__link-text">Корзина</span>
        <span class="header__link-count">(5)</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.87329 1.33337L3.45996 3.75337" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.127 1.33337L12.5403 3.75337" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.33301 5.23336C1.33301 4.00002 1.99301 3.90002 2.81301 3.90002H13.1863C14.0063 3.90002 14.6663 4.00002 14.6663 5.23336C14.6663 6.66669 14.0063 6.56669 13.1863 6.56669H2.81301C1.99301 6.56669 1.33301 6.66669 1.33301 5.23336Z" stroke="#1C1C1C"/>
            <path d="M6.50684 9.33337V11.7" stroke="#1C1C1C" stroke-linecap="round"/>
            <path d="M9.57324 9.33337V11.7" stroke="#1C1C1C" stroke-linecap="round"/>
            <path d="M2.33301 6.66663L3.27301 12.4266C3.48634 13.72 3.99967 14.6666 5.90634 14.6666H9.92634C11.9997 14.6666 12.3063 13.76 12.5463 12.5066L13.6663 6.66663" stroke="#1C1C1C" stroke-linecap="round"/>
            </svg>
        </a>
    </div>
    </div>
    `;

    el.append(layout(child, 'header__container'));

    return el;
}
