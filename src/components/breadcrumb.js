import { layout } from "./layout";

export const breadcrumb = () => {
    const el = document.createElement('breadcrumb');
    el.classList.add('breadcrumb');
    const child = `
            <nav class="breadcrumb__navigation">
                <ul class="breadcrumb__list">
                    <li class="breadcrumb__item"><a href="#" class="breadcrumb__link">Главная</a></li>
                    <li class="breadcrumb__item"><a href="#" class="breadcrumb__link">Лыжи</a></li>
                    <li class="breadcrumb__item"><a href="#" class="breadcrumb__link">Горные лыжи</a></li>
                </ul>
            </nav>
    `;
    el.append(layout(child, 'breadcrumb__list'));
    return el;
}
