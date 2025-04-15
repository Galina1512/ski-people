import Navigo from "navigo";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { main } from "../components/main";
import { catalog } from "../components/catalog";
import { productList } from "../components/productList";
import { getData } from "./api";
import { localStorageLoad } from "./localstorage";
import { addFavorite } from "./addFavorite";
import { search } from "./search";
import { paginationHtml } from "./paginationHtml";
import { paginationCount } from "./paginationCount";
import { paginationData } from "./paginationData";
import { breadcrumb } from "../components/breadcrumb";

export const router = new Navigo('/', { linksSelector: 'a[href^="/"]'});

export const initRouter = () => {
    router
.on('/', async () => {
    const goods = await getData();
    header();
    search();
    catalog('', main(), goods[0]);
    breadcrumb('', main(), [
        {'text': 'Главная', 'href': '/'},
        {'text': 'Лыжи', 'href': '/ski'},
        {'text': 'Горные лыжи', 'href': '/sky'},
    ]);
    productList('Список товаров', goods[0], main());
    paginationHtml('', main(), goods);
    paginationCount(goods);
    footer();
    addFavorite(goods);
    console.log('main');
    router.updatePageLinks();
},
{
    leave(done) {
        catalog('remove');
        productList('remove');
        paginationHtml('remove');
        done();
    }, 
},
)
.on('/search', async (query) => {
    const goods = await getData(query.params.query);
    header();
    catalog('', main(), goods);
    productList('Список товаров', goods, main());
    footer();
    addFavorite(goods);
    console.log('main');
    router.updatePageLinks();
},
{
    leave(done) {
        catalog('remove');
        productList('remove');
        done();
    }, 
},
)

.on('/product', () => {
    header();
    product('', main());
    slider();
    footer();
    router.updatePageLinks();
},
{
    leave(done) {
        product('remove');
        done();
    }, 
},
)
.on ('/favorite', async () => {
    const goods = await getData();
        header();
        breadcrumb('', main(), [
            {'text': 'Главная', 'href': '/'},
            {'text': 'Избранное', 'href': '/favorite'},
        ]);

        productList('Избранное', localStorageLoad('ski-people-favorite'), main());
        addFavorite(goods);

        paginationHtml('', main());
        paginationCount();
        footer();
        search();
        console.log ('Favorite');
        router.updatePageLinks();
    },
    {
        leave(done) {
            productList('remove');
            paginationHtml('remove');
            done();

        },
    },
)

    .notFound(() => {
       document.body.innerHTML = `<h2>Error 404 - такой страницы не существует</h2>`
    })

    router.resolve();
}

