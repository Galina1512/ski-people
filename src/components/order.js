import { layout } from "./layout";

export const order = () => {
    const el = document.createElement('order');
    el.classList.add('order');
    const child = `
        <h3 class="order__apeal">Заказ успешно размещен</h3>
        <p class="order__info-price">20&nbsp;000&nbsp;₽</p>      
        <p class="order__info-id">#&nbsp;43435</p>
        <h3 class="order__apeal">Данные доставки</h3>

        <table class="order__info-table order__table">
            <tr class="order__table-row">
            <td class="order__table-item order__table-item1">Получатель</td>
            <td class="order__table-item">Иванов Петр Александрович</td>
        </tr>
            <tr class="order__table-row">
            <td class="order__table-item order__table-item1">Телефон</td>
            <td class="order__table-item">+7 (737) 346 23 00</td>
            </tr>
            <tr class="order__table-row">
            <td class="order__table-item order__table-item1">Email</td>
            <td class="order__table-item">Ivanov84@gmail.com</td>
            </tr>
            <tr class="order__table-row">
            <td class="order__table-item order__table-item1"> Адрес доставки</td>
            <td class="order__table-item">Москва, ул. Ленина, 21, кв. 33</td>
            </tr>
            <tr class="order__table-row">
            <td class="order__table-item order__table-item1">Способ оплаты</td>
            <td class="order__table-item">Картой при получении</td>
            </tr>
            <tr class="order__table-row">
            <td class="order__table-item order__table-item1">Способ получения</td>
            <td class="order__table-item">Доставка</td>
            </tr>
        </table>

        <a href="/" >
            <button class="order__button" type="button">На главную</button>
        </a>
    `;
    el.append(layout(child, 'order__container'));

    return el;
}