import { getProducttById } from "./api.js";
import { onRenderModalProduct } from "./templates/modal-product.js";

export async function openProductModal(event) {
    const ParentElement = event.target.closest('li')
    const cardButton = ParentElement.querySelector('.js-addToCart-btn');
    const productId = cardButton.getAttribute('data-id');
    const productInfo = await getProducttById(productId);
    const modal = onRenderModalProduct(productInfo);
    document.querySelector('body').insertAdjacentHTML('beforeend', modal);
    // document.querySelector('.modal-product-backdrop').classList.remove('is-hidden');
}

