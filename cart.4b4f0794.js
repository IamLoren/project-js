var counterValue=1,decrementButton=document.querySelector(".cart-counter-decrement");decrementButton.addEventListener("click",(function(){1===counterValue?decrementButton.setAttribute("disabled",!0):(counterValue-=1,decrementButton.removeAttribute("disabled")),updateInterface()}));var incrementButton=document.querySelector(".cart-counter-increment");function updateInterface(){document.querySelector(".cart-counter-value").textContent=counterValue}incrementButton.addEventListener("click",(function(){counterValue+=1,decrementButton.removeAttribute("disabled"),updateInterface()}));
//# sourceMappingURL=cart.4b4f0794.js.map