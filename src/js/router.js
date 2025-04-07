import Navigo from "navigo";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { favorite } from "../components/favorite";
import { order } from "../components/order";
import { breadcrumb } from "../components/breadcrumb";
import { product } from "../components/product";

const router = new Navigo('/', { linksSelector: 'a[href^="/"]'});


export const initRouter = () => {
    router
    .on('/', () => {
       document.body.append(
        header(),
        favorite(),
        breadcrumb(),
        product(),
        order(),
        footer()
    );
    })
    .on ('/favorite', () => {
        console.log ('Favorite');
    })

    .notFound(() => {
        console.log ('Error 404');
    })

    router.resolve();
}