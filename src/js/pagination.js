import Pagination from 'tui-pagination';
//import 'tui-pagination/dist/tui-pagination.css';
import { getAllProducts, getProductsByQuery } from './api.js';
import { createProductCard, renderMarkup } from './templates/cards.js';

const productsListGeneral = document.querySelector('.products-list-general');
const container = document.querySelector('#tui-pagination-container');
const options = {
  totalItems: 0,
  ItemsPerPage: 9,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination(container, options);
page = pagination.getCurrentPage();

console.log(page);

const onRenderPage = async () => {
  try {
    // робимо запит
    console.log(getAllProducts);
    const allProducts = await getAllProducts();
    console.log(allProducts.results);
    renderMarkup(allProducts.results, 'general', productsListGeneral);
    // Розмітка
    pagination.reset(allProducts.totalPages);
    container.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
    Report.failure(err.message, 'Please reload!');
  }
};

const createUserPagination = async event => {
  const currentPage = event.page;
  getAllProducts.page = currentPage;
  console.log(currentPage);

  try {
    const allProducts = await getAllProducts();
    console.log(allProducts.results);
    page = pagination.getCurrentPage();
    console.log(page);

    renderMarkup(allProducts.results, 'general', productsListGeneral);
  } catch (err) {
    console.log(err);
  }
};
pagination.on('afterMove', createUserPagination);

document.addEventListener('DOMContentLoaded', onRenderPage);
