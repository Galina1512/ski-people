import { layout } from "./layout";

let rendered = false;

export const breadcrumb = async (action, parent, data) => {
    if (action === 'remove') {
        document.querySelector('.breadcrumb').remove();
        rendered = false;
        return;
    }

    if (rendered) {
        return '';
    }

const listItems = data.map(item =>
     `<li class="breadcrumb__item"><a href="${item.href}" class="breadcrumb__link">${item.text}</a></li>
     `).join('');

const el = document.createElement('div');
el.classList.add('breadcrumb');
    const child = `
            <nav class="breadcrumb__navigation">
                <ul class="breadcrumb__list">
                ${listItems}
                </ul>
            </nav>
    `;
    el.append(layout(child, 'breadcrumb__container'));
    parent.append(el);

    rendered = true;

    return el;
}
