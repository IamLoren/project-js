export function openDropDown(event) {
    // arrowBtn.classList.toggle('rotate');
    event.target.nextElementSibling.classList.toggle('list-active');
}

export function rotateButton(event) {
    event.target.classList.toggle('rotate');
}