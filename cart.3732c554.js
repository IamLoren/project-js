!function(){function n(n){n.target.nextElementSibling.classList.toggle("list-active")}function t(n){n.target.classList.toggle("rotate")}document.querySelector(".filters-form");var a=document.querySelector(".filters-categories"),c=document.querySelector(".filters-allTypes"),s=document.querySelectorAll(".filters-down-svg");a.addEventListener("click",n),c.addEventListener("click",n),s.forEach((function(n){n.addEventListener("click",t)}));var e=document.querySelector(".products-list-general"),i=document.querySelector(".products-list-popular"),r=[{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8}],o=function(n){console.log(n);var t=n[0],a=t.img,c=t.name,s=t.category,e=t.size,i=t.popularity,r=t.price,o=t.id;return'\n      <li class="product-card">\n          <div class="img-wrapper">\n            <img\n              class="card-img"\n              src="'.concat(a,'"\n              alt="').concat(c,'"\n            />\n          </div>\n  \n              <div class="card-info" >\n                  <h3 class="card-title">').concat(c,'</h3>\n                  <span class="card-info">Category: ').concat(s,'</span>\n                  <span class="card-info">Size: ').concat(e,'</span>\n                  <span class="student-info">Popularity: ').concat(i,'</span>\n              </div>\n    \n              <div class="card-price">\n                  <span class="card-price">&#36;').concat(r,"</span>\n                  <button data-id=").concat(o,' type="submit" class="addToCart-btn js-addToCart-btn">\n                      <svg class="cart-svg" width="18" height="18">\n                          <use href="./images/icons.svg#icon-shopping-cart"></use>\n                      </svg>\n                  </button>\n              </div>\n      </li>\n      ')}(r);e.insertAdjacentHTML("beforeend",o);var d,l,p,g,u,m,v,f=(d=r[0],l=d.img,p=d.name,g=d.category,u=d.size,m=d.popularity,v=d.id,'\n        <li class="product-card">\n            <div class="img-wrapper">\n              <img\n                class="card-img"\n                src="'.concat(l,'"\n                alt="').concat(p,'"\n              />\n            </div>\n    \n                <div class="card-info" >\n                    <h3 class="card-title">').concat(p,'</h3>\n                    <span class="card-info">Category: ').concat(g,'</span>\n                    <span class="card-info">Size: ').concat(u,'</span>\n                    <span class="student-info">Popularity: ').concat(m,"</span>\n                </div>\n                    \n                <button data-id=").concat(v,' type="submit" class="addToCart-btn js-addToCart-btn">\n                    <svg class="cart-svg" width="12" height="12">\n                        <use href="./images/icons.svg#icon-shopping-cart"></use>\n                    </svg>\n                </button>\n            \n        </li>\n        '));i.insertAdjacentHTML("beforeend",f)}();
//# sourceMappingURL=cart.3732c554.js.map
