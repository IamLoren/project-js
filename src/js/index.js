import { openDropDown, rotateButton,changeCategoriesValue, changeTypesValue, collectQueryParameters } from "./drop-downs.js";
import { getProducts } from "./api.js";


const searchForm = document.querySelector('.filters-form');
const categoriesInput = document.querySelector('.filters-categories');
const allSearchInput = document.querySelector('.filters-allTypes');
const downBtn = document.querySelectorAll('.filters-down-svg');
const categoriesItem = document.querySelectorAll('.filters-categories-item');
const allTypesItem = document.querySelectorAll('.filters-allTypes-item');

categoriesInput.addEventListener('click', openDropDown);
allSearchInput.addEventListener('click', openDropDown);
downBtn.forEach(btn => {
    btn.addEventListener('click', rotateButton);
})

categoriesItem.forEach(item => {
    item.addEventListener('click', changeCategoriesValue);
})

allTypesItem.forEach(item => {
    item.addEventListener('click', changeTypesValue);
})

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
    const queryParameters = collectQueryParameters();
    await getProducts(queryParameters, page, perPage)
    } catch (error) {
        console.log(error);
    }
});


// TEMPORARY CODE FOR CARD STYLIZATION

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




