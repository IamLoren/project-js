import localStorageAPI from './localStorage.js';
import iconsPath from '../images/icons.svg';
import emptyCart from '../images/yellow-shopping-basket.webp';

export function addNumberProd() {
  const arrFromLS = localStorageAPI.load('product');
  document.querySelector('.cart-number-purchases').innerHTML = `${
    arrFromLS ? arrFromLS.length : '0'
  } `;
}
addNumberProd();

/* берем значення зі сховища*/

const cartProducts = localStorageAPI.load('product');
// console.log(cartProducts);
document.addEventListener('DOMContentLoaded', event => {
  if (cartProducts.length === 0) {
    document.querySelector('.section-cart').innerHTML = renderCartEmpty();
  }
  addScroll();
});

function renderCarts(cartProducts) {
  if (cartProducts) {
    const cartItemsHTML = cartProducts
      .map(product => renderCartProduct(product))
      .join('');
    document.querySelector('.cart-shopping-list').innerHTML = cartItemsHTML;
  } else {
    document.querySelector('.section-cart').innerHTML = renderCartEmpty();
  }
}
renderCarts(cartProducts);
/* видаляємо всі значення при натисканні на кнопку*/
document.querySelector('.delete-all-box').addEventListener('click', () => {
  //   localStorage.clear();
  localStorageAPI.remove('product');
  document.querySelector('.section-cart').innerHTML = renderCartEmpty();
});
/* видаляємо по item */
const productList = document.querySelector('.cart-shopping-list ');
productList.addEventListener('click', onDeleteItemClick);

function onDeleteItemClick(event) {
  if (!event.target.closest('.cart-delete-icon')) {
    return;
  }
  localStorage.setItem('product', JSON.stringify());
  const cardEl = event.target.closest('li');

  const id = cardEl.dataset.productId;
  // console.log(id);

  const index = cartProducts.findIndex(object => object.id === id);
  // console.log('індекс', cartProducts);
  if (index !== -1) {
    cartProducts.splice(index, 1);
    // console.log('видалений', cartProducts);
  }
  // console.log('видалений');
  localStorage.setItem('product', JSON.stringify(cartProducts));
  renderCarts(cartProducts);
  calculatePrice();
  addScroll();
  addNumberProd();
  if (cartProducts.length === 0) {
    document.querySelector('.section-cart').innerHTML = renderCartEmpty();
  }
}
/* */

/* рендер картки*/
function renderCartProduct(product) {
  let { id, name, img, category, size, price } = product;
  return `
      <li class="cart-shopping-item" data-product-id=${id}>
      <img
        class="cart-shopping-img"
        src="${img}"
        alt="${name}"
      />
      <div class="cart-item-info">
        <div class="cart-info-top">
          <p class="cart-info-name-product">${name}</p>
          <svg class="cart-delete-icon">
              <use href="${iconsPath}#icon-close"></use>
          </svg>
        </div>
  
        <ul class="cart-properties-list">
          <li class="cart-properties-item">
            <h3 class="cart-properties-caption">Category:</h3>
            <p class="cart-properties-subtitle">${category}</p>
          </li>
          <li class="cart-properties-item">
            <h3 class="cart-properties-caption">Size:</h3>
            <p class="cart-properties-subtitle">${size}</p>
          </li>
        </ul>
  
        <div class="cart-info-bottom">
         <p class="cart-info-price">&#36;<span class="js-cart-info-price">${price}</span></p>
  
          <div class="cart-counter-wrapper">
            <button class="cart-counter-decrement" type="button" data-action="minus">-</button>
            <span class="cart-counter-value" data-counter>1</span>
            <button class="cart-counter-increment" type="button" data-action="plus">+</button>
          </div>
        </div>
      </div>
    </li>
      `;
}
/* рендер пустої корзини*/
function renderCartEmpty() {
  return `
  <div class="cart-empty">
  <img
    class="cart-empty-img"
    src="${emptyCart}"
    alt="Empty cart"
  />
  <p class="cart-empty-text">
    Your basket is <a href="#" class="cart-empty-link">empty...</a>
  </p>
  <p class="cart-empty-description">
    Go to the main page to select your favorite products and add them to the
    cart.
  </p>
</div>
      `;
}

/* розрахунок ціни*/

function calculatePrice() {
  const cartItems = document.querySelectorAll('.cart-shopping-item');
  const spanTotalPrice = document.querySelector('.js-total-price');
  // console.log(cartItems);
  let totalPrice = 0;

  cartItems.forEach(item => {
    // console.log(item);

    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.js-cart-info-price');

    const currentPrice = Number(amountEl.innerHTML) * Number(priceEl.innerHTML);
    // console.log(currentPrice);
    totalPrice += currentPrice;
  });
  spanTotalPrice.innerHTML = totalPrice.toFixed(2);
}
calculatePrice();
/* кнопки + та - */
window.addEventListener('click', event => {
  let counter;
  if (
    event.target.dataset.action === 'plus' ||
    event.target.dataset.action === 'minus'
  ) {
    const counterWrapper = event.target.closest('.cart-counter-wrapper');
    counter = counterWrapper.querySelector('[data-counter]');
  }

  if (event.target.dataset.action === 'plus') {
    counter.innerHTML = ++counter.innerHTML;
    calculatePrice();
  }

  if (event.target.dataset.action === 'minus') {
    if (parseInt(counter.innerHTML) > 1)
      counter.innerHTML = --counter.innerHTML;
    calculatePrice();
  }
});

function addScroll() {
  const productsCount = productList.querySelectorAll(
    '.cart-shopping-item'
  ).length;
  // console.log(productsCount);

  if (productsCount > 3) {
    productList.style.overflowY = 'scroll';
  } else {
    productList.style.overflowY = 'hidden';
  }
}
