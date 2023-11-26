import localStorageAPI from './localStorage.js';

export function getLength() {
    const arrFromLS = localStorageAPI.load('product');
    document.querySelector('#header-length').innerHTML = `${arrFromLS.length}`;
    document.querySelector('.cart-number-purchases').innerHTML = `${arrFromLS.length}`;
}
getLength();


