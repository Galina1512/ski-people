import Navigo from "navigo";
import { header } from "../components/header";
import { main } from "../components/main";
import { footer } from "../components/footer";
import { productList } from "../components/productList";
import { getData } from "./api";
import { catalog } from "../components/catalog";

const router = new Navigo('/', { linksSelector: 'a[href^="/"]'});

export const initRouter = () => {
    router
    .on('/', async () => {
        const goods = await getData()
        header(),
        catalog(main(), goods);
        productList('Список товаров', goods, main()),
        footer(),
        console.log('main');
    })
    .on('/product', () => {
        // header(),
        // footer(),
        console.log('product');
    })
    .notFound(() => {
        document.body.innerHTML = `<h2>Error 404 - такой страницы не существует</h2>`
    });

    router.resolve();
}