import localStorageAPI from './localStorage.js';
import iconsPath from '../images/icons.svg';


export function addNumberProd() {
    const arrFromLS = localStorageAPI.load('product');
    document.querySelector('.cart-number-purchases').innerHTML = `${arrFromLS.length}`;
}
addNumberProd();

/* берем значення зі сховища*/
const cartProducts = localStorageAPI.load('product');
console.log(cartProducts);
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
document.querySelector('.delete-all-text').addEventListener('click', () => {
  //   localStorage.clear();
  localStorageAPI.remove('product');
  document.querySelector('.section-cart').innerHTML = renderCartEmpty();
});
/* видалення одного елемента */

let removeCartItems = document.querySelectorAll('.cart-delete-icon');
console.log(removeCartItems);
removeCartItems.forEach(removeItem => {
  removeItem.addEventListener('click', removeId);
});

function removeId(event) {
  const ParentElement = event.target.closest('li');
  const productId = ParentElement.getAttribute('data-product-id');
  console.log(productId);
  let newArr = cartProducts.filter(item => item.id !== productId);
  // totalPrice();
  localStorage.setItem('product', JSON.stringify(newArr));
  renderCarts(newArr);
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
          <p class="cart-info-price">${price}</p>
  
          <div class="cart-counter-wrapper">
            <button class="cart-counter-decrement" type="button" data-action="minus">-</button>
            <span class="cart-counter-value" data-counter>5</span>
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
    src="./images/yellow-shopping-basket.webp"
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

/* вирахування загальної ціни*/
// function totalPrice() {
//   const spanTotalPrice = document.querySelector('.js-total-price');
//   const prices = cartProducts.map(object => object.price);
//   console.log('prices', prices);

//   const totalPrice = prices
//     .reduce((current, previous) => Number(current) + Number(previous), 0)
//     .toFixed(2);
//   console.log(totalPrice);
//   spanTotalPrice.textContent = totalPrice;
// }
// totalPrice();

/* розрахунок ціни*/

function calculatePrice() {
  const cartItems = document.querySelectorAll('.cart-shopping-item');
  const spanTotalPrice = document.querySelector('.js-total-price');
  // console.log(cartItems);
  let totalPrice = 0;

  cartItems.forEach(item => {
    // console.log(item);

    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.cart-info-price');

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
