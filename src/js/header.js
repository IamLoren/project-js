export function getLength() {
    const array = localStorage.getItem('array');
    if (!array) {
                document.querySelector('#header-length').innerHTML = 0;
        return;
    } 
    document.querySelector('#header-length').innerHTML = array.length;  
}
