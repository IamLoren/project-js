const container = document.querySelector('pagination-container');

function renderPagination(pages) {
  // if () {}
  return `<div class="pagination-container">
  <div class="pagination-number-container">
  <div class="pagination-item-arrow">
<svg class="pagination-arrow" width="24" height="24">
  <use href="./images/icons.svg#icon-caret-small-left"></use>
</svg>
  </div>
  <div class="pagination-item ">1</div>
  <div class="pagination-item-arrow">
<svg class="pagination-arrow" width="24" height="24">
  <use href="./images/icons.svg#icon-caret-small-right"></use>
</svg>
  </div>
</div>
</div>`;
}
