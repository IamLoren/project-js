function n(n){n.target.nextElementSibling.classList.toggle("list-active")}function s(n){n.target.classList.toggle("rotate")}document.querySelector(".filters-form");const t=document.querySelector(".filters-categories"),e=document.querySelector(".filters-allTypes"),a=document.querySelectorAll(".filters-down-svg");t.addEventListener("click",n),e.addEventListener("click",n),a.forEach((n=>{n.addEventListener("click",s)}));let c=document.querySelector(".products-list-general"),i=document.querySelector(".products-list-popular"),r=[{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8}];const o=function(n){console.log(n);const{img:s,name:t,category:e,size:a,popularity:c,price:i,id:r}=n[0];return`\n      <li class="product-card">\n          <div class="img-wrapper">\n            <img\n              class="card-img"\n              src="${s}"\n              alt="${t}"\n            />\n          </div>\n  \n              <div class="card-info" >\n                  <h3 class="card-title">${t}</h3>\n                  <span class="card-info">Category: ${e}</span>\n                  <span class="card-info">Size: ${a}</span>\n                  <span class="student-info">Popularity: ${c}</span>\n              </div>\n    \n              <div class="card-price">\n                  <span class="card-price">&#36;${i}</span>\n                  <button data-id=${r} type="submit" class="addToCart-btn js-addToCart-btn">\n                      <svg class="cart-svg" width="18" height="18">\n                          <use href="./images/icons.svg#icon-shopping-cart"></use>\n                      </svg>\n                  </button>\n              </div>\n      </li>\n      `}(r);c.insertAdjacentHTML("beforeend",o);const d=function(n){const{img:s,name:t,category:e,size:a,popularity:c,id:i}=n[0];return`\n        <li class="product-card">\n            <div class="img-wrapper">\n              <img\n                class="card-img"\n                src="${s}"\n                alt="${t}"\n              />\n            </div>\n    \n                <div class="card-info" >\n                    <h3 class="card-title">${t}</h3>\n                    <span class="card-info">Category: ${e}</span>\n                    <span class="card-info">Size: ${a}</span>\n                    <span class="student-info">Popularity: ${c}</span>\n                </div>\n                    \n                <button data-id=${i} type="submit" class="addToCart-btn js-addToCart-btn">\n                    <svg class="cart-svg" width="12" height="12">\n                        <use href="./images/icons.svg#icon-shopping-cart"></use>\n                    </svg>\n                </button>\n            \n        </li>\n        `}(r);i.insertAdjacentHTML("beforeend",d);
//# sourceMappingURL=cart.2ef8f4a2.js.map
