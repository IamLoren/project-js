export function createProductCard(product) {
    console.log(product);
    const { img, name, category, size, popularity, price, id } = product[0];
  
    return `
      <li class="product-card">
          <div class="img-wrapper">
            <img
              class="card-img"
              src="${img}"
              alt="${name}"
            />
          </div>
  
              <div class="card-info" >
                  <h3 class="card-title">${name}</h3>
                  <span class="card-info">Category: ${category}</span>
                  <span class="card-info">Size: ${size}</span>
                  <span class="student-info">Popularity: ${popularity}</span>
              </div>
    
              <div class="card-price">
                  <span class="card-price">&#36;${price}</span>
                  <button data-id=${id} type="submit" class="addToCart-btn js-addToCart-btn">
                      <svg class="cart-svg" width="18" height="18">
                          <use href="../images/icons.svg#icon-shopping-cart"></use>
                      </svg>
                  </button>
              </div>
      </li>
      `;
  }

  export function createPopularCard(product) {
  
      const { img, name, category, size, popularity, id } = product;
    
      return `
        <li class="product-card">
            <div class="img-wrapper">
              <img
                class="card-img"
                src="${img}"
                alt="${name}"
              />
            </div>
    
                <div class="card-info" >
                    <h3 class="card-title">${name}</h3>
                    <span class="card-info">Category: ${category}</span>
                    <span class="card-info">Size: ${size}</span>
                    <span class="student-info">Popularity: ${popularity}</span>
                </div>
                    
                <button data-id=${id} type="submit" class="addToCart-btn js-addToCart-btn">
                    <svg class="cart-svg" width="12" height="12">
                        <use href="./images/icons.svg#icon-shopping-cart"></use>
                    </svg>
                </button>
            
        </li>
        `;
    }
  
//   export function renderMarkup(data, typeOfCard, listOfCard) {
//       let markup;
//       typeOfCard === 'general' 
//       ? markup = data.map((product) => createProductCard(product))
//       : typeOfCard === 'popular' 
//       ? markup = data.map((product) => createPopularCard(product))
//       : markup = data.map((product) => createDiscountCard(product))
  
//     markup.length === 0
//       ? sorryMessage.classList.remove("is-hidden") //додати сорі-меседж у статичну розмітку із класом іс-хідден
//       : listOfCard.innerHTML = markup.join("") && sorryMessage.classList.add("is-hidden");
//   }