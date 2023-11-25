import iconsPath from '../../images/icons.svg';

export function createProductCard(product) {
  let { img, name, category, size, popularity, price, _id } = product;
  return `
      <li class="product-card-general">
          <div class="img-wrapper">
            <img
              class="card-img"
              src="${img}"
              alt="${name}"
            />
          </div>
  
              <div class="general-card-container" >
                  <h3 class="general-card-title">${name}</h3>
                  <div class="general-span-container">
                  <span class="general-span-info">Category:<span class="span-info-value">${category}</span></span>

                  <span class="general-span-info">Size:</span><span class="span-info-value">${size}</span>

                  <span class="general-span-info">Popularity:<span class="span-info-value">${popularity}</span></span>
                  </div>
              </div>
    
              <div class="general-card-price">
                  <span class="general-span-price">&#36;${price}</span>
                  <button data-id=${_id} type="submit" class="addToCart-btn js-addToCart-btn">
                      <svg class="cart-svg" width="18" height="18">
                          <use href="${iconsPath}#icon-shopping-cart"></use>
                      </svg>
                  </button>
              </div>
      </li>
      `;
}

export function createPopularCard(product) {
  const { img, name, category, size, popularity, _id } = product;

  return `
        <li class="popular-product-card">
            <div class="poppular-img-wrapper">
              <img
                class="popular-card-img"
                src="${img}"
                alt="${name}"
              />
            </div>
    
                <div class="popular-card-info" >
                    <h3 class="popular-card-title">${name}</h3>
                    <div class="popular-span-container">
                    <span class="popular-span-info">Category: <span class="span-info-value">${category}</span></span>
                    <span class="popular-span-info">Size: <span class="span-info-value">${size}</span></span>
                    <span class="popular-span-info">Popularity: <span class="span-info-value">${popularity}</span></span>
                    </div>
                </div>
                    
                <button data-id=${_id} type="submit" class="popular-card-btn js-addToCart-btn">
                    <svg class="popular-cart-svg" width="12" height="12">
                        <use href="${iconsPath}#icon-shopping-cart"></use>
                    </svg>
                </button>
            
        </li>
        `;
}

export function createDiscountCard(product) {
  const { img, name, price, _id } = product;

  return `
      <li class="discount-product-card">
      <div class="discount-img-wrapper">
        <img
          class="discount-card-img"
          src="${img}"
          alt="${name}"
        />
        <svg class="discount-svg-icon" width="60" height="60">
          <use href="${iconsPath}#icon-discount"></use>
        </svg>

      </div>

      <div class="discount-card-info" >
          <h3 class="discount-card-title">${name}</h3>

          <div class="discount-card-price">
              <span class="span-price">&#36;${price}</span>
              <button data-id=${_id} type="submit" class="addToCart-btn js-addToCart-btn">
                  <svg class="cart-svg" width="18" height="18">
                      <use href="${iconsPath}#icon-shopping-cart"></use>
                  </svg>
              </button>
          </div>
      </div>
  </li>`;
}

export function renderMarkup(data, typeOfCard, listOfCard) {
  let markup;
  typeOfCard === 'general'
    ? (markup = data.map(product => createProductCard(product)))
    : typeOfCard === 'popular'
    ? (markup = data.map(product => createPopularCard(product)))
    : (markup = data.map(product => createDiscountCard(product)));

  listOfCard.innerHTML = markup.join('');
}
