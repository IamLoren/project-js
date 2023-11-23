let counterValue = 1;

const decrementButton = document.querySelector(".cart-counter-decrement");
decrementButton.addEventListener("click", () => {
    if (counterValue === 1) {
        decrementButton.setAttribute('disabled', true);
    } else {
        counterValue -= 1;
        decrementButton.removeAttribute('disabled');
    }
    updateInterface();
});

const incrementButton = document.querySelector(".cart-counter-increment");
incrementButton.addEventListener("click", () => {
    counterValue += 1;
    decrementButton.removeAttribute('disabled');

    updateInterface();
});

function updateInterface() {
    const spanValue = document.querySelector(".cart-counter-value");

    spanValue.textContent = counterValue;
}