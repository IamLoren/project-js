function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},c=e.parcelRequired7c6;null==c&&((c=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var c={id:t,exports:{}};return n[t]=c,e.call(c.exports,c,c.exports),c.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequired7c6=c),c("kyEFX").register(JSON.parse('{"jqa3N":"cart.6ceaa3ea.js","8OQ7p":"icons.349afe89.svg"}')),c("bUb57");var a,o=c("31u3U");a=new URL(c("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const i=o.default.load("product");function s(e){if(e){const n=e.map((e=>function(e){let{id:n,name:r,img:c,category:o,size:i,price:s}=e;return`\n      <li class="cart-shopping-item" data-product-id=${n}>\n      <img\n        class="cart-shopping-img"\n        src="${c}"\n        alt="${r}"\n      />\n      <div class="cart-item-info">\n        <div class="cart-info-top">\n          <p class="cart-info-name-product">${r}</p>\n          <svg class="cart-delete-icon">\n              <use href="${t(a)}#icon-close"></use>\n          </svg>\n        </div>\n  \n        <ul class="cart-properties-list">\n          <li class="cart-properties-item">\n            <h3 class="cart-properties-caption">Category:</h3>\n            <p class="cart-properties-subtitle">${o}</p>\n          </li>\n          <li class="cart-properties-item">\n            <h3 class="cart-properties-caption">Size:</h3>\n            <p class="cart-properties-subtitle">${i}</p>\n          </li>\n        </ul>\n  \n        <div class="cart-info-bottom">\n          <p class="cart-info-price">${s}</p>\n  \n          <div class="cart-counter-wrapper">\n            <button class="cart-counter-decrement" type="button" data-action="minus">-</button>\n            <span class="cart-counter-value" data-counter>1</span>\n            <button class="cart-counter-increment" type="button" data-action="plus">+</button>\n          </div>\n        </div>\n      </div>\n    </li>\n      `}(e))).join("");document.querySelector(".cart-shopping-list").innerHTML=n}else document.querySelector(".section-cart").innerHTML=u()}console.log(i),s(i),document.querySelector(".delete-all-text").addEventListener("click",(()=>{o.default.remove("product"),document.querySelector(".section-cart").innerHTML=u()}));let l=document.querySelectorAll(".cart-delete-icon");function p(t){const e=t.target.closest("li").getAttribute("data-product-id");console.log(e);let n=i.filter((t=>t.id!==e));localStorage.setItem("product",JSON.stringify(n)),s(n)}function u(){return'\n  <div class="cart-empty">\n  <img\n    class="cart-empty-img"\n    src="../../images/tomatoes.jpg"\n    alt="Empty cart"\n  />\n  <p class="cart-empty-text">\n    Your basket is <a href="#" class="cart-empty-link">empty...</a>\n  </p>\n  <p class="cart-empty-description">\n    Go to the main page to select your favorite products and add them to the\n    cart.\n  </p>\n</div>\n      '}console.log(l),l.forEach((t=>{t.addEventListener("click",p)})),function(){const t=document.querySelector(".js-total-price"),e=i.map((t=>t.price));console.log("prices",e);const n=e.reduce(((t,e)=>Number(t)+Number(e)),0).toFixed(2);console.log(n),t.textContent=n}(),window.addEventListener("click",(t=>{let e;if("plus"===t.target.dataset.action||"minus"===t.target.dataset.action){e=t.target.closest(".cart-counter-wrapper").querySelector("[data-counter]")}"plus"===t.target.dataset.action&&(e.innerHTML=++e.innerHTML),"minus"===t.target.dataset.action&&parseInt(e.innerHTML)>1&&(e.innerHTML=--e.innerHTML)})),c("31u3U"),c("epHO8");
//# sourceMappingURL=cart.6ceaa3ea.js.map
