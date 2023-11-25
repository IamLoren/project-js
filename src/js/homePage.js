import {
  openDropDown,
  rotateButton,
  changeCategoriesValue,
  changeTypesValue,
  collectQueryParameters,
  filterBySearchParameter,
} from './drop-downs.js';
import {
  getProductsByQuery,
  getAllProducts,
  getDiscountProducts,
  getPopularProducts,
} from './api.js';
import { renderMarkup } from './templates/cards.js';
import { openProductModal } from './card-button.js';
import {saveToLocalStorage }  from './addToCart.js';
import { renderPagination } from './pagination.js';
import { load } from './localStorage.js';

const searchForm = document.querySelector('.filters-form');
const categoriesInput = document.querySelector('.filters-categories');
const allSearchInput = document.querySelector('.filters-allTypes');
const downBtn = document.querySelectorAll('.filters-down-svg');
const categoriesItem = document.querySelectorAll('.filters-categories-item');
const allTypesItem = document.querySelectorAll('.filters-allTypes-item');
const productsListGeneral = document.querySelector('.products-list-general');
const productListDiscount = document.querySelector('.products-list-discount');
const productListPopular = document.querySelector('.products-list-popular');
export let arrProducts = [];


const dataFromLocalStorage = firstLoad('product');
document.querySelector('#header-length').innerHTML = `${
  dataFromLocalStorage === undefined ? '0' : dataFromLocalStorage.length
}`;

//ДЕФОЛТНИЙ РЕНДЕР ТОВАРІВ ПРИ ПЕРШОМУ ЗАВАНТАЖЕННІ САЙТУ

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const dataFromLocalStorage = load('product');
    document.querySelector('#header-length').innerHTML = `${
      dataFromLocalStorage === undefined ? '0' : dataFromLocalStorage.length
    }`;

    const allProduct = await getAllProducts();
    const arrOfAllProducts = allProduct.results;
    const pages = allProduct.totalPages;
    renderMarkup(arrOfAllProducts, 'general', productsListGeneral);
    productsListGeneral.insertAdjacentHTML(
      'beforeend',
      renderPagination(pages)
    );

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

      const addToCartBtn = document.querySelectorAll('.js-addToCart-btn');
      addToCartBtn.forEach(btn => {
        btn.addEventListener('click', saveToLocalStorage);
      });
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
    const filteredParameter = queryParameters.filterSearch;
    console.log(filteredParameter);
    const response = await getProductsByQuery(queryParameters);
    const pages = response.totalPages;
    const productForRender = response.results;
    const filteredProducts = filterBySearchParameter(filteredParameter, productForRender);
    console.log(productForRender);
    productsListGeneral.innerHTML = '';
    renderMarkup(filteredProducts, 'general', productsListGeneral);
    productsListGeneral.insertAdjacentHTML(
      'beforeend',
      renderPagination(pages)
    );

    let cardsDisc = document.querySelectorAll('.discount-product-card');
    cardsDisc.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

    const addToCartBtn = document.querySelectorAll('.js-addToCart-btn');
    addToCartBtn.forEach(btn => {
      btn.addEventListener('click', saveToLocalStorage);
    });
  } catch (error) {
    console.log(error);
  }
});

import { subscribeMailNewProduct } from './footer.js';
const form = document.querySelector(".footer-form");
form.addEventListener("submit", subscribeMailNewProduct)

 function firstLoad(key) {
  try {
      const serializedState = localStorage.getItem(key);
      if (serializedState) {
          arrProducts = JSON.parse(serializedState);
        }
        return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
      console.error("Get state error: ", error.message);
  }
};