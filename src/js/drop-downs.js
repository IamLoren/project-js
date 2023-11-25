export function openDropDown(event) {
const parentElement = this.closest('.filters-wrap');
const svgElement = parentElement.querySelector('.filters-down-svg');
const list = parentElement.querySelector('ul');

    if (list.classList.contains('list-active')) {
        list.classList.remove('list-active');
    } else {
        list.classList.add('list-active');
    }
   if (svgElement.classList.contains('rotate')) {
    svgElement.classList.remove('rotate');
   } else {
    svgElement.classList.add('rotate');
   }
}

export function rotateButton(event) {
    if (this.classList.contains('rotate')) {
        this.classList.remove('rotate');
    } else {
        this.classList.add('rotate');
    }
   if (this.previousElementSibling.classList.contains('list-active')) {
    this.previousElementSibling.classList.remove('list-active');
   } else {
    this.previousElementSibling.classList.add('list-active');
   }
}

export function changeCategoriesValue(event) {
    const input = document.querySelector('.filters-categories');
    const list = document.querySelector('.filters-categories-list');
   const newValue = event.target.textContent;

   input.textContent = newValue;
    list.classList.remove('list-active');
    list.nextElementSibling.classList.remove('rotate');
}

export function changeTypesValue(event) {
    const input = document.querySelector('.filters-allTypes');
    const list = document.querySelector('.filters-allTypes-list');
   const newValue = event.target.textContent;

   input.textContent = newValue;
    list.classList.remove('list-active');
    list.nextElementSibling.classList.remove('rotate');
}

export function collectQueryParameters() {
    const filterSearch = document.querySelector('.filters-allTypes').textContent.split(' ').join('');
    const category = document.querySelector('.filters-categories').textContent.split(' ').join('_').replace('/', '&');
    const searchWord = document.querySelector('.filters-input').value;
    const  queryParameters = {
        category,
        keyword: searchWord,
        filterSearch: `by${filterSearch}`
    }
    return queryParameters;
}

export function filterBySearchParameter(parameter, productForRender) {
    if (parameter === "byAtoZ" || parameter === "byShowall") {
        return productForRender;
    }
    if (parameter === "byZtoA") {
        return productForRender.reverse();
    }
    if (parameter === "byLessthan10$") {
        return productForRender.filter(product => product.price < 10);
    }
    if (parameter === "byGreaterthan10$") {
        return productForRender.filter(product => product.price >= 10);
    }
    if (parameter === "byPopular") {
        return [...productForRender].filter(product => product.popularity > 0).sort((product1, product2) => product2.popularity - product1.popularity);
    }
    if (parameter === "byNotpopular") {
        return productForRender.filter(product => product.popularity === 0);
    }
}