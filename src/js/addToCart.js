const arrProducts = [];

export function saveToLocalStorage(event) {
   const id = event.currentTarget.getAttribute('data-id');
   const parentElement = event.target.closest('li');
   const nameOfProduct = parentElement.querySelector('.general-card-title').textContent;
   const price = parentElement.querySelector('.general-span-price').textContent;
   const img = parentElement.querySelector('.card-img').src;
    const localStorage = window.localStorage;
  
    const productData = {
      id,
      name: nameOfProduct,
      price,
      img,
    };

    arrProducts.push(productData);
    
    localStorage.setItem("product", JSON.stringify(arrProducts));
  }

