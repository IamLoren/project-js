export function openDropDown(event) {
    event.target.closest
    event.target.nextElementSibling.classList.toggle('list-active');
}

export function rotateButton(event) {
   this.classList.toggle('rotate');
   this.previousElementSibling.classList.toggle('list-active');
}