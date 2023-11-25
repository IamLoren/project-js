// import { getProducttById } from '../api.js';
import { save, load, remove } from '../localStorage.js';
import {firstLoad, saveToLocalStorage} from '../addToCart.js';
import {arrProducts} from '../index.js';

import pathToSvg from '../../images/icons.svg';

// const addToCartFromModalProduct = document.querySelectorAll('.modal-product-btn-price');
// addToCartFromModalProduct.forEach(btn => {
//   btn.addEventListener('click', saveToLocalStorage)
// });

export function addToCartTheProduct() {
  const addToCartFromModalProduct = document.querySelector('.modal-product-btn-price');
  
//    addToCartFromModalProduct.forEach(btn => {
    addToCartFromModalProduct.addEventListener('click', event => { 

        const productId = event.target.dataset.id;
        const textBtn = event.target.innerText;
        // const loadProduct = firstLoad();

        // console.log(loadProduct);

        if (textBtn === 'Add to') {
            if (event.target.innerText === 'Add to') {
                event.target.innerText = 'Remove from';
                const id = event.currentTarget.getAttribute('data-id');
    const parentElement = event.target.closest('.modal-product');
    const nameOfProduct = parentElement.querySelector('.modal-title').textContent;
    const price = parentElement.querySelector('.modal-product-price').textContent;
    const img = parentElement.querySelector('.modal-product-img').src;
     const localStorage = window.localStorage;
   
     const productData = {
       id,
       name: nameOfProduct,
       price,
       img,
     };
 
     arrProducts.push(productData);
 
     localStorage.setItem("product", JSON.stringify(arrProducts));
     document.querySelector('#header-length').innerHTML = arrProducts.length;
            } else {
            // if (!isProductInCart(productId)) {
            //     event.target.innerText = 'Remove from';
            //     save(productId);
            // } else {
                console.log(`This product is already in the cart!`);
            }
        } else if (textBtn === 'Remove from') {
            if (isProductInCart(productId)) {
                event.target.innerText = 'Add to';
                remove(productId);
            } else {
                console.log(`This product is not in the cart!`);
            }
        }
    });
}


// addToCartFromModalProduct.forEach(btn => {
//   btn.addEventListener('click', handleAddToCartClick);
// });

// console.log(addToCartTheProduct);





export function closeModal() {
  const modalProductBackdrop = document.querySelector('.modal-product-backdrop');
  const closeModalButton = document.querySelector('.modal-btn-close');

  const onClickCloseModal = () => {
    modalProductBackdrop.remove();
    modalProductBackdrop.classList.add('is-hidden');
    document.body.classList.remove('is-overflow-hidden');
  };

  const onEscapeCloseModal = event => {
    if(event.key === 'Escape') {
      onClickCloseModal();
      modalProductBackdrop.classList.add('is-hidden');
    }
  };

  const onClickOutModalProduct = event => {
    if(event.target === modalProductBackdrop) {
        onClickCloseModal();
        modalProductBackdrop.classList.remove('is-hidden');
    }
  } 

  closeModalButton.addEventListener('click', onClickCloseModal);
  document.addEventListener('keydown', onEscapeCloseModal);
  document.addEventListener('click', onClickOutModalProduct);

}



export function onRenderModalProduct(product) {
  let { name, category, desc, img, price, size, popularity, _id } = product;

  return `
          <div class="modal-product-backdrop" data-modal>
          <div class="modal-product">
              <button type="button" class="modal-btn-close" data-modal-close>
                  <svg class="modal-svg-close" width="28" height="28">
                      <use href="${pathToSvg}#icon-close"></use>
                  </svg>
              </button>
      
              <div class="modal-product-info">
                  <div class="modal-product-img-wrapper">
                    
                      <img class="modal-product-img" src="${img}" alt="${name}" width="1660">
        
                  </div>
      
                  <div class="modal-product-description">
                      <h2 class="modal-title">${name}</h2>
      
                      <ul class="modal-product-list">
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Category:</h3>
                              <p class="modal-product-content">${category}</p>
                          </li>
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Size:</h3>
                              <p class="modal-product-content">${size}</p>
                          </li>
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Popularity:</h3>
                              <p class="modal-product-content">${popularity}</p>
                          </li>
                      </ul>
      
                      <p class="modal-product-text">${desc}</p>
                  </div>
              </div>
      
              <div class="modal-product-wrapper-price">
                  <p class="modal-product-price"><span>&#36;</span>${price}</p>
                  <button data-id=${_id} type="submit" class="modal-product-btn-price">
                      Add to 
                      <svg class="modal-btn-svg" width="18" height="18">
                          <use class="modal-icon-svg" href="${pathToSvg}#icon-shopping-cart"></use>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
      `;
}

//

// додання до корзини add to - remove to///
// const addToCartFromModalProduct = document.querySelector('data-id');
// console.log(addToCartFromModalProduct);


// function addToCartFromModalProduct(event) {
//     const btnModalProdroduct = event.target;
//     const productIdOnClickModalProductBtn = btnModalProdroduct.dataset.productIdOnClickModalProductBtn;
// }
