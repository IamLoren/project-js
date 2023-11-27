const scrollToTopButton = document.querySelector('.scroll-to-up-btn');

function toggleScrollToTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onload = function() {
    toggleScrollToTopButton();
};

window.onscroll = function() {
    toggleScrollToTopButton();
};

scrollToTopButton.addEventListener('click', scrollToTop);


