import { getProducttById } from './api.js';
import { onRenderModalProduct, closeModal, addToCartTheProduct } from './templates/modal-product.js';
// import { closeModal } from './templates/modal-product.js';
// import { save, load, remove } from './localStorage.js';


export async function openProductModal(event) {

  if (event.target.closest('.js-addToCart-btn')) {
      return;
  }

  const ParentElement = event.target.closest('li');
  const cardButton = ParentElement.querySelector('.js-addToCart-btn');
  const productId = cardButton.getAttribute('data-id');
  const productInfo = await getProducttById(productId);
  const modal = onRenderModalProduct(productInfo);
  document.querySelector('body').insertAdjacentHTML('beforeend', modal);
  closeModal();
  // document.querySelector('.modal-product-backdrop').classList.remove('is-hidden');
  document.body.classList.add('is-overflow-hidden');
  addToCartTheProduct();
}
