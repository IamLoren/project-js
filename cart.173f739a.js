let n=document.querySelector(".products-list-general"),s=document.querySelector(".products-list-popular"),a=[{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8}];const t=function(n){console.log(n);const{img:s,name:a,category:t,size:i,popularity:c,price:e,id:r}=n[0];return`\n      <li class="product-card">\n          <div class="img-wrapper">\n            <img\n              class="card-img"\n              src="${s}"\n              alt="${a}"\n            />\n          </div>\n  \n              <div class="card-info" >\n                  <h3 class="card-title">${a}</h3>\n                  <span class="card-info">Category: ${t}</span>\n                  <span class="card-info">Size: ${i}</span>\n                  <span class="student-info">Popularity: ${c}</span>\n              </div>\n    \n              <div class="card-price">\n                  <span class="card-price">&#36;${e}</span>\n                  <button data-id=${r} type="submit" class="addToCart-btn js-addToCart-btn">\n                      <svg class="cart-svg" width="18" height="18">\n                          <use href="./images/icons.svg#icon-shopping-cart"></use>\n                      </svg>\n                  </button>\n              </div>\n      </li>\n      `}(a);n.insertAdjacentHTML("beforeend",t);const i=function(n){const{img:s,name:a,category:t,size:i,popularity:c,id:e}=n[0];return`\n        <li class="product-card">\n            <div class="img-wrapper">\n              <img\n                class="card-img"\n                src="${s}"\n                alt="${a}"\n              />\n            </div>\n    \n                <div class="card-info" >\n                    <h3 class="card-title">${a}</h3>\n                    <span class="card-info">Category: ${t}</span>\n                    <span class="card-info">Size: ${i}</span>\n                    <span class="student-info">Popularity: ${c}</span>\n                </div>\n                    \n                <button data-id=${e} type="submit" class="addToCart-btn js-addToCart-btn">\n                    <svg class="cart-svg" width="12" height="12">\n                        <use href="./images/icons.svg#icon-shopping-cart"></use>\n                    </svg>\n                </button>\n            \n        </li>\n        `}(a);s.insertAdjacentHTML("beforeend",i);
//# sourceMappingURL=cart.173f739a.js.map
