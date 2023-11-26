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
import { saveToLocalStorage } from './addToCart.js';
// import { renderPagination } from './pagination.js';
import localStorageAPI from './localStorage.js';

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

const fillarrProducts = () => {
  const dataFromLS = localStorageAPI.load('product');

  if (dataFromLS === undefined) {
    document.querySelector('#header-length').innerHTML = '0';
    return;
  }
  document.querySelector('#header-length').innerHTML = dataFromLS.length;
  arrProducts = dataFromLS;
};

fillarrProducts();

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
    const productForRender = response.results;
    const filteredProducts = filterBySearchParameter(
      filteredParameter,
      productForRender
    );
    console.log(productForRender);
    productsListGeneral.innerHTML = '';
    renderMarkup(filteredProducts, 'general', productsListGeneral);

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
