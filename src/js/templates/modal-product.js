// open-close-Modal

// const openModalProduct = document.querySelectorAll('.product-card');
// const closeModalProduct = document.querySelector('[data-modal-close]');
// const modalProduct = document.querySelector('[data-modal]');


// openModalProduct.addEventListener('click', toggleModalProduct);
// closeModalProduct.addEventListener('click', toggleModalProduct);

// function toggleModalProduct() {
//     modalProduct.classList.toggle('is-hidden');
// }

// modalProduct.addEventListener('click', function(event) {
//     if (event.target !== modalProduct) {
//         modalProduct.classList.add('is-hidden');
//     }
// });

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Escape') {
//         modalProduct.classList.remove('is-hidden');
//     }
// });

// 


export function onRenderModalProduct(product) {
    let { name, category, desc, img, price, size, popularity, _id } = product;
          return `
          <div class="modal-product-backdrop" data-modal>
          <div class="modal-product">
              <button type="button" class="modal-btn-close" data-modal-close>
                  <svg class="modal-svg-close" width="28" height="28">
                      <use href="./images/icons.svg#icon-close"></use>
                  </svg>
              </button>
      
              <div class="modal-product-info">
                  <div class="temporaneo">
                      <!-- <a class="modal-product-link-img" href="" target="_blank" rel="noopener noreferrer">
                      <img class="modal-product-img" src="${img}" alt="${name}" width="180">
                  </a> -->
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
                  <button data-id=${_id} type="button" class="modal-product-btn-price">
                      Add to 
                      <svg class="modal-btn-svg" width="18" height="18">
                          <use class="modal-icon-svg" href="./images/icons.svg#icon-shopping-cart"></use>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
      `
};


