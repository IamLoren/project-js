import localStorageAPI from './localStorage.js';

export function getLength() {
    const arrFromLS = localStorageAPI.load('product')
    document.querySelector('#header-length').innerHTML = arrFromLS;
    // const array = localStorage.getItem('array');
    // if (!array) {
    //             document.querySelector('#header-length').innerHTML = 0;
    //     return;
    // } 
    // document.querySelector('#header-length').innerHTML = array.length;  
}
// import {getLength} from './header.js'
// getLength();

