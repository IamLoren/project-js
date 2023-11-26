import { arrProducts } from "./homePage.js";

export function getLength() {
    document.querySelector('#header-length').innerHTML = arrProducts.length;
    // const array = localStorage.getItem('array');
    // if (!array) {
    //             document.querySelector('#header-length').innerHTML = 0;
    //     return;
    // } 
    // document.querySelector('#header-length').innerHTML = array.length;  
}
// import {getLength} from './header.js'
// getLength();

