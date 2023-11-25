import {
  openDropDown,
  rotateButton,
  changeCategoriesValue,
  changeTypesValue,
  collectQueryParameters,
} from './drop-downs.js';
import {   getProductsByQuery, getAllProducts, getDiscountProducts, getPopularProducts } from './api.js';
import { renderMarkup } from './templates/cards.js';
import { openProductModal } from './card-button.js';
import {saveToLocalStorage, firstLoad }  from './addToCart.js';
import { renderPagination } from './pagination.js';
import { load } from './localStorage.js';

const searchForm = document.querySelector('.filters-form');
const categoriesInput = document.querySelector('.filters-categories');
const allSearchInput = document.querySelector('.filters-allTypes');
const downBtn = document.querySelectorAll('.filters-down-svg');
const categoriesItem = document.querySelectorAll('.filters-categories-item');
const allTypesItem = document.querySelectorAll('.filters-allTypes-item');
const productsListGeneral = document.querySelector('.products-list-general');
const productListDiscount = document.querySelector('.products-list-discount')
const productListPopular = document.querySelector('.products-list-popular');
export let arrProducts = [];


const dataFromLocalStorage = firstLoad("product");
document.querySelector('#header-length').innerHTML = `${dataFromLocalStorage === undefined ? '0' : dataFromLocalStorage.length}`;
dataFromLocalStorage === undefined 
? null : arrProducts = dataFromLocalStorage;


//ДЕФОЛТНИЙ РЕНДЕР ТОВАРІВ ПРИ ПЕРШОМУ ЗАВАНТАЖЕННІ САЙТУ

document.addEventListener('DOMContentLoaded', async () => {
  try {

    const allProduct = await getAllProducts();
    const arrOfAllProducts = allProduct.results;
    const pages = allProduct.totalPages;
    renderMarkup(arrOfAllProducts, 'general', productsListGeneral);
    document.querySelector('.products-list-general').insertAdjacentHTML('beforeend', renderPagination(pages));

    let cards = document.querySelectorAll('.product-card-general');
    cards.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

    const addToCartBtn = document.querySelectorAll('.js-addToCart-btn');
addToCartBtn.forEach(btn => {
  btn.addEventListener('click', saveToLocalStorage)
})

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
    console.log(queryParameters)
    const response = await getProductsByQuery(queryParameters);
    console.log(response)
    const productForRender = response.results;
    productsListGeneral.innerHTML = '';
    renderMarkup(productForRender, 'general', productsListGeneral);
    const newLocalStorage = load("product");
    console.log(newLocalStorage)
    let cardsDisc = document.querySelectorAll('.discount-product-card');
    cardsDisc.forEach(card => {
      card.addEventListener('click', openProductModal);
    });
    
    const addToCartBtn = document.querySelectorAll('.js-addToCart-btn');
addToCartBtn.forEach(btn => {
  btn.addEventListener('click', saveToLocalStorage)
})
  } catch (error) {
    console.log(error);
  }
});



// ІМЕНОВАНИЙ ЕКСПОРТ
