!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},i=n.parcelRequired7c6;function a(e){var t=this.closest(".filters-wrap"),n=t.querySelector(".filters-down-svg"),r=t.querySelector("ul");r.classList.contains("list-active")?r.classList.remove("list-active"):r.classList.add("list-active"),n.classList.contains("rotate")?n.classList.remove("rotate"):n.classList.add("rotate")}function c(e){this.classList.contains("rotate")?this.classList.remove("rotate"):this.classList.add("rotate"),this.previousElementSibling.classList.contains("list-active")?this.previousElementSibling.classList.remove("list-active"):this.previousElementSibling.classList.add("list-active")}function o(e){var t=document.querySelector(".filters-categories"),n=document.querySelector(".filters-categories-list"),r=e.target.textContent;t.textContent=r,n.classList.remove("list-active"),n.nextElementSibling.classList.remove("rotate")}function l(e){var t=document.querySelector(".filters-allTypes"),n=document.querySelector(".filters-allTypes-list"),r=e.target.textContent;t.textContent=r,n.classList.remove("list-active"),n.nextElementSibling.classList.remove("rotate")}null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,s;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},s=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var s={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=s[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),s[e]=t),t}})),i("iE7OH").register(JSON.parse('{"9p9yL":"cart.279861b8.js","410VS":"icons.cf316034.svg"}'));var u;u=i("aNJCr").getBundleURL("9p9yL")+i("iE7OH").resolve("410VS");var d=document.querySelector(".filters-form"),f=document.querySelector(".filters-categories"),p=document.querySelector(".filters-allTypes"),v=document.querySelectorAll(".filters-down-svg"),g=document.querySelectorAll(".filters-categories-item"),m=document.querySelectorAll(".filters-allTypes-item");f.addEventListener("click",a),p.addEventListener("click",a),v.forEach((function(e){e.addEventListener("click",c)})),g.forEach((function(e){e.addEventListener("click",o)})),m.forEach((function(e){e.addEventListener("click",l)})),d.addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector(".filters-allTypes").textContent,n=document.querySelector(".filters-categories").textContent,r=document.querySelector(".filters-input").value;({endpoint:t,category:n,searchWord:r})}));var y=document.querySelector(".products-list-general"),h=(document.querySelector(".products-list-popular"),function(e){console.log(e);var n=e[0],r=n.img,s=n.name,i=n.category,a=n.size,c=n.popularity,o=n.price,l=n.id;return'\n      <li class="product-card-general">\n          <div class="img-wrapper">\n            <img\n              class="card-img"\n              src="'.concat(r,'"\n              alt="').concat(s,'"\n            />\n          </div>\n  \n              <div class="general-card-container" >\n                  <h3 class="general-card-title">').concat(s,'</h3>\n                  <div class="general-span-container">\n                  <span class="general-span-info">Category:<span class="span-info-value">').concat(i,'</span></span>\n                  <span class="general-span-info>Size:<span class="span-info-value">').concat(a,'</span></span>\n                  <span class="general-span-info">Popularity:<span class="span-info-value">').concat(c,'</span></span>\n                  </div>\n              </div>\n    \n              <div class="general-card-price">\n                  <span class="general-span-price">&#36;').concat(o,"</span>\n                  <button data-id=").concat(l,' type="submit" class="addToCart-btn js-addToCart-btn">\n                      <svg class="cart-svg" width="18" height="18">\n                          <use href="').concat(t(u),'#icon-shopping-cart"></use>\n                      </svg>\n                  </button>\n              </div>\n      </li>\n      ')}([{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8}]));y.insertAdjacentHTML("beforeend",h)}();
//# sourceMappingURL=cart.279861b8.js.map
