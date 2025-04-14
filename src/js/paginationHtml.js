import { layout } from "../components/layout";

let rendered = false;

export const paginationHtml = (action, parent, data) => {

  if (action === 'remove') {
    document.querySelector('.pagination').remove();
    rendered = false;
    return;
  }

    if (rendered) {
        return '';
    }

    const listItems = data.map(item =>`<li class="pagination__item"></li>`).join('');

    const el = document.createElement('div');
    el.classList.add('pagination');
    
const child = `
<ul class="pagination__list">
  ${listItems}
</ul>
<div class="pagination__count count-text">
  <button class="count-text__button">&lt;</button> 
  <p class="count-text__text">
    12 из 31
  </p>       
  <button class="count-text__button">&gt;</button>
</div>
`;
el.append(layout(child, 'pagination__container'));
parent.append(el);

document.querySelector('.pagination__item').classList.add('pagination_active');


rendered = true;
return el;
}

