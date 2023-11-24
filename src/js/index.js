import {
  openDropDown,
  rotateButton,
  changeCategoriesValue,
  changeTypesValue,
  collectQueryParameters,
} from './drop-downs.js';
import { getProducts, getAllProducts, getDiscountProducts, getPopularProducts } from './api.js';
import { renderMarkup } from './templates/cards.js';
import { openProductModal } from './card-button.js';

const searchForm = document.querySelector('.filters-form');
const categoriesInput = document.querySelector('.filters-categories');
const allSearchInput = document.querySelector('.filters-allTypes');
const downBtn = document.querySelectorAll('.filters-down-svg');
const categoriesItem = document.querySelectorAll('.filters-categories-item');
const allTypesItem = document.querySelectorAll('.filters-allTypes-item');
const productsListGeneral = document.querySelector('.products-list-general');
const productListDiscount = document.querySelector('.products-list-discount')
const productListPopular = document.querySelector('.products-list-popular')

//ДЕФОЛТНИЙ РЕНДЕР ТОВАРІВ ПРИ ПЕРШОМУ ЗАВАНТАЖЕННІ САЙТУ

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const allProduct = await getAllProducts();
    const arrOfAllProducts = allProduct.results;
    renderMarkup(arrOfAllProducts, 'general', productsListGeneral);
    let cards = document.querySelectorAll('.product-card-general');
    cards.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

    const arrOfDiscountProducts = await getDiscountProducts();
    renderMarkup(arrOfDiscountProducts, 'discount', productListDiscount);
    let cardsDisc = document.querySelectorAll('.discount-product-card');
    cardsDisc.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

    const arrOfPopularProducts = await getPopularProducts();
    renderMarkup(arrOfPopularProducts, 'popular', productListPopular);
    let cardsPop = document.querySelectorAll('.popular-product-card');
    cardsPop.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

  } catch (error) {
    console.log(error);
  }
});

// РОБОТА ДРОПДАУНІВ + ІНПУТ

categoriesInput.addEventListener('click', openDropDown);
allSearchInput.addEventListener('click', openDropDown);
downBtn.forEach(btn => {
  btn.addEventListener('click', rotateButton);
});

categoriesItem.forEach(item => {
  item.addEventListener('click', changeCategoriesValue);
});

allTypesItem.forEach(item => {
  item.addEventListener('click', changeTypesValue);
});


// ФІЛЬТРАЦІЯ ТОВАРІВ


searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  try {
    const queryParameters = collectQueryParameters();
    await getProducts(queryParameters, page, perPage);
  } catch (error) {
    console.log(error);
  }
});