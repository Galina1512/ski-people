import Navigo from "navigo";

const router = new Navigo('/', { linksSelector: 'a[href^="/"]'});


export const initRouter = () => {
    router
    .on('/', () => {
        console.log('HOME');
    })
    .on ('/favorite', () => {
        console.log ('Favorite');
    })
    .on ('/cart', (match) => {
        console.log ('Favorite');
    })

    .notFound(() => {
        console.log ('Error 404');
    })

    router.resolve();
}