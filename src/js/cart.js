import { load, remove, save } from './localStorage.js';
import iconsPath from '../images/icons.svg';

console.log(load('product'));

/* берем значення зі сховища*/
const cartProducts = load('product');

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
  remove('product');
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
  console.log(newArr);
  save('product', newArr);
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
  
          <div class="cart-counter">
            <button class="cart-counter-decrement" type="button">-</button>
            <span class="cart-counter-value">1</span>
            <button class="cart-counter-increment" type="button">+</button>
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
    src="../../images/tomatoes.jpg"
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

/* витягую ціну*/
const prices = cartProducts.map(object => object.price);
console.log(typeof prices[0]);

document.querySelector('.cart-shopping-list').innerHTML =
  '<p class="cart-empty">Корзина пуста</p>';

let counterValue = 1;

const decrementButton = document.querySelector('.cart-counter-decrement');
decrementButton.addEventListener('click', () => {
  if (counterValue === 1) {
    decrementButton.setAttribute('disabled', true);
  } else {
    counterValue -= 1;
    decrementButton.removeAttribute('disabled');
  }
  updateInterface();
});

const incrementButton = document.querySelector('.cart-counter-increment');
incrementButton.addEventListener('click', () => {
  counterValue += 1;
  decrementButton.removeAttribute('disabled');

  updateInterface();
});

function updateInterface() {
  const spanValue = document.querySelector('.cart-counter-value');

  spanValue.textContent = counterValue;
}
