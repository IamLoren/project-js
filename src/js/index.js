import { createProductCard, createPopularCard, renderMarkup } from "./templates/cards.js";

let listGeneral = document.querySelector('.products-list-general');
let listPopular = document.querySelector('.products-list-popular');

let good = [
    {
    _id: "640c2dd963a319ea671e383b",
    name: "Ackee",
    img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",
    category: "Fresh_Produce",
    price: 8.99,
    size: "16 oz",
    is10PercentOff: false,
    popularity: 8
}
];


const cardGeneral = createProductCard(good);
listGeneral.insertAdjacentHTML('beforeend', cardGeneral);

const cardPopular = createPopularCard(good);
listPopular.insertAdjacentHTML('beforeend', cardPopular);