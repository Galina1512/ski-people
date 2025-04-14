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

export const router = new Navigo('/', { linksSelector: 'a[href^="/"]'});

export const initRouter = () => {
    router
.on('/', async () => {
    const goods = await getData();
    header();
    search();
    catalog('', main(), goods);
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
        productList('Избранное', localStorageLoad('ski-people-favorite'), main());
        paginationHtml('', main());
        paginationCount();
        footer();
        addFavorite(goods);
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

