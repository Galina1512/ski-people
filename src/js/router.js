import Navigo from "navigo";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { main } from "../components/main";
import { catalog } from "../components/catalog";
import { productList } from "../components/productList";
import { getData } from "./api";
import { localStorageLoad } from "./localstorage";
import { addFavorite } from "./addFavorite";

const router = new Navigo('/', { linksSelector: 'a[href^="/"]'});

export const initRouter = () => {
    router
.on('/', async () => {
    const goods = await getData();
    header();
    catalog(main(), goods);
    productList('Список товаров', goods, main());
    footer();
    addFavorite(goods);
    console.log('main');
})
.on('/product', () => {
    console.log('product');
})
.on ('/favorite', async () => {
    const goods = await getData();
        header();
        productList('Избранное', localStorageLoad('ski-people-favorite'), main());
        footer();
        addFavorite(goods);
        console.log ('Favorite');
    })

    .notFound(() => {
       document.body.innerHTML = `<h2>Error 404 - такой страницы не существует</h2>`
    })

    router.resolve();
}



// .on('/', () => {
//     header(),
//     footer()
// })


