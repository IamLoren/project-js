// const container = document.querySelector('pagination-container');
import iconsPath from '../images/icons.svg';
import Pagination from 'tui-pagination';

import { searchForm, productsListGeneral } from '../js/index.js';

const container = document.querySelector('#tui-pagination-container');
const option = {
  totalItems: 0,
  ItemsPerPage: 9,
  visiblePages: 5,
  page: 1,
};
const pagination = new Pagination(container, option);
page = pagination.getCurrentPage();

console.log(page);
pagination.reset(response.data.total);
container.classList.remove('is-hidden');

const createUserPagination = async event => {
  const currentPage = event.page;
};
pagination.on('afterMove', createUserPagination);

export function renderPagination(pages) {
  return `<div class="pagination-container container">
<div class="pagination-item-arrow">
<svg class="pagination-arrow" width="27" height="27">
  <use href="${iconsPath}#icon-caret-small-left"></use>
</svg>
  </div>
    <div class="pagination-number-container">
  <div class="pagination-item ">1</div>
  <div class="pagination-item ">2</div>
  <div class="pagination-item ">...</div>
  <div class="pagination-item ">${pages - 1}</div>
  <div class="pagination-item ">${pages}</div>
    </div>
  <div class="pagination-item-arrow">
<svg class="pagination-arrow" width="27" height="27">
  <use href="${iconsPath}#icon-caret-small-right"></use>
</svg>

</div>
</div>`;
}
