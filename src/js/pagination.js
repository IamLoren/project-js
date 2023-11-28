import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import icon from '../../images/icons.svg';
import { getProductsByQuery } from './api.js';
import { renderMarkup } from './templates/cards.js';
import {
  collectQueryParameters,
  filterBySearchParameter,
} from './drop-downs.js';
import { saveToLocalStorage } from './addToCart.js';
import { renderSorryMessage } from './templates/renderSorryMessage.js';

const productsListGeneral = document.querySelector('.products-list-general');
const container = document.querySelector('#tui-pagination-container');

const options = {
  itemsPerPage: 1,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" aria-label="pagination-page link" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton: `<a href="#" aria-label="pagination-move link" class="icon tui-page-btn tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </a>`,
    disabledMoveButton: `<span class="tui-page-btn tui-is-disabled tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </span>`,
    moreButton:
      '<a href="#" aria-label="pagination-more link" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);

//Callback to switch between pages
const paginationClick = async event => {
  const currentPage = event.page;
  console.log(currentPage);

  try {
    const queryParameters = collectQueryParameters();
    queryParameters.page = currentPage;
    const response = await getProductsByQuery(queryParameters);
    const productForRender = response.results;
    const filteredParameter = queryParameters.filterSearch;
    console.log(productForRender);
    const filteredProducts = filterBySearchParameter(
      filteredParameter,
      productForRender
    );

    productsListGeneral.innerHTML = '';
    if (filteredProducts.length === 0) {
      const sorryMessage = renderSorryMessage();
      productsListGeneral.insertAdjacentHTML('beforeend', sorryMessage);
    } else {
      renderMarkup(filteredProducts, 'general', productsListGeneral);
    }
    let cardsDisc = document.querySelectorAll('product-card-general');
    cardsDisc.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

    const addToCartBtn = document.querySelectorAll('.js-addToCart-btn');
    addToCartBtn.forEach(btn => {
      btn.addEventListener('click', saveToLocalStorage);
    });
  } catch (err) {
    console.log(err);
  }
};
pagination.on('afterMove', paginationClick);

//Callback to update pagination with new values
const paginationUpdate = async event => {
  try {
    const queryParameters = collectQueryParameters();
    const response = await getProductsByQuery(queryParameters);
    if (response.totalPages === 1) {
      container.classList.add('is-hidden');
    } else {
      pagination.setTotalItems(response.totalPages);
      container.classList.remove('is-hidden');
    }
    pagination.reset();
  } catch (err) {
    console.log(err);
  }
};
document.addEventListener('DOMContentLoaded', paginationUpdate);

const searchForm = document.querySelector('.filters-form');
searchForm.addEventListener('submit', paginationUpdate);
