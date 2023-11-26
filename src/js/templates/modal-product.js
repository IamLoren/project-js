import { getProducttById } from '../api.js';
// import { save, load, remove } from '../localStorage.js';
// import {firstLoad, saveToLocalStorage} from '../addToCart.js';
import {arrProducts} from '../homePage.js';
import {getLength} from '../header.js'


import pathToSvg from '../../images/icons.svg';



export function addToCartTheProduct() {
  const addToCartFromModalProduct = document.querySelector('.modal-product-btn-price');
  const productData = {};
  addToCartFromModalProduct.addEventListener('click', async event => {

    const textBtn = event.target.innerText;
 
    const id = event.currentTarget.getAttribute('data-id');
   
            const isInCart = arrProducts.some(product => product.id === id); 
         
        if (textBtn === 'Add to') {

            try {
                const product = await getProducttById(id);
               console.log(product);
                const { category,  size, _id, name, price, img  } = product;
                productData.category = category;
                productData.size = size;
                productData.id = _id;
                productData.name = name;
                productData.price = price;
                productData.img = img;
               } catch (error) {
                console.log(error);
               }
                const localStorage = window.localStorage;
            
                arrProducts.push(productData);
               
            
                localStorage.setItem("product", JSON.stringify(arrProducts));
            
                getLength();
    
            event.target.innerHTML = `Remove from <svg class="modal-btn-svg" width="18" height="18">
            <use class="modal-icon-svg" href="${pathToSvg}#icon-shopping-cart"></use>
            </svg>`;
      
        } 

    // if (textBtn === 'Remove from') {

    //     event.target.innerHTML = `Add to <svg class="modal-btn-svg" width="18" height="18">
    //         <use class="modal-icon-svg" href="${pathToSvg}#icon-shopping-cart"></use>
    //         </svg>`;
    //     const idCard = event.currentTarget.getAttribute('data-id');
    //     let newArray = arrProducts.filter(item => item.id !== idCard)

    //     localStorage.setItem("product", JSON.stringify(newArray));
       
    //     getLength();
    // }
    if (textBtn === 'Remove from') {
        // Видалити продукт з arrProducts
        const idCard = event.currentTarget.getAttribute('data-id');
        arrProducts = arrProducts.filter(item => item.id !== idCard);
      
        // Оновити локальне сховище із оновленим масивом arrProducts
        localStorage.setItem('product', JSON.stringify(arrProducts));
      
        // Оновити текст і значок кнопки
        event.target.innerHTML = 'Add to <svg class="modal-btn-svg" width="18" height="18"><use class="modal-icon-svg" href="${pathToSvg}#icon-shopping-cart"></use></svg>';
      
        // Оновити лічильник довжини
        getLength();
    }
  })
} 


       


    
    // const removeToCartFromModalProduct = document.querySelector('.remove-modal-product-btn-price');
    // removeToCartFromModalProduct.addEventListener('click', event => { 

    //     const isInCart = arrProducts.some(product => product.id === id);

    // if (isInCart) {
    //     event.target.innerHTML = `Remove to <svg class="modal-btn-svg" width="18" height="18">
    // <use class="modal-icon-svg" href="${pathToSvg}#icon-shopping-cart"></use>
    //     </svg>`;
    //     return;
    
  

    // if(textBtn === 'Remove from' ) {


    // console.log(firstLoad('product'));

    // const idCard = event.currentTarget.getAttribute('data-id');
    // let newArray = arrProducts.filter(item => item.id !== idCard)
    // console.log(newArray);

    // // перевірити яка працює

    // // save('product', newArray);

    // localStorage.setItem("product", JSON.stringify(newArray));

    // console.log(newArray);
                
   





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
    const isInCart = arrProducts.some(product => product.id === _id);
    //  console.log(isInCart);

        // if (!isInCart) {
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
                  ${isInCart ? 'Remove from' : 'Add to'} 
                      <svg class="modal-btn-svg" width="18" height="18">
                          <use class="modal-icon-svg" href="${pathToSvg}#icon-shopping-cart"></use>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
      `;
}

    // if (isInCart) {
    //     // let { name, category, desc, img, price, size, popularity, _id } = product;
      
    //     return `
    //             <div class="modal-product-backdrop" data-modal>
    //             <div class="modal-product">
    //                 <button type="button" class="modal-btn-close" data-modal-close>
    //                     <svg class="modal-svg-close" width="28" height="28">
    //                         <use href="${pathToSvg}#icon-close"></use>
    //                     </svg>
    //                 </button>
            
    //                 <div class="modal-product-info">
    //                     <div class="modal-product-img-wrapper">
                          
    //                         <img class="modal-product-img" src="${img}" alt="${name}" width="1660">
              
    //                     </div>
            
    //                     <div class="modal-product-description">
    //                         <h2 class="modal-title">${name}</h2>
            
    //                         <ul class="modal-product-list">
    //                             <li class="modal-product-item">
    //                                 <h3 class="modal-product-caption">Category:</h3>
    //                                 <p class="modal-product-content">${category}</p>
    //                             </li>
    //                             <li class="modal-product-item">
    //                                 <h3 class="modal-product-caption">Size:</h3>
    //                                 <p class="modal-product-content">${size}</p>
    //                             </li>
    //                             <li class="modal-product-item">
    //                                 <h3 class="modal-product-caption">Popularity:</h3>
    //                                 <p class="modal-product-content">${popularity}</p>
    //                             </li>
    //                         </ul>
            
    //                         <p class="modal-product-text">${desc}</p>
    //                     </div>
    //                 </div>
            
    //                 <div class="modal-product-wrapper-price">
    //                     <p class="modal-product-price"><span>&#36;</span>${price}</p>
    //                     <button data-id=${_id} type="submit" class="modal-product-btn-price">
    //                         Remove to
    //                         <svg class="modal-btn-svg" width="18" height="18">
    //                             <use class="modal-icon-svg" href="${pathToSvg}#icon-shopping-cart"></use>
    //                         </svg>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //         `;
    //       }
// }



//

// додання до корзини add to - remove to///
// const addToCartFromModalProduct = document.querySelector('data-id');
// console.log(addToCartFromModalProduct);


// function addToCartFromModalProduct(event) {
//     const btnModalProdroduct = event.target;
//     const productIdOnClickModalProductBtn = btnModalProdroduct.dataset.productIdOnClickModalProductBtn;
// }
