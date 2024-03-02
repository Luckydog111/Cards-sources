window.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelectorAll('.slide');

    function hideSlide() {
        slide.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showSlide(i = 2) {
        slide[i].classList.add('active');
    }
    showSlide();

    slide.forEach((item, i) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            hideSlide();
            if (!item.classList.contains('active')) {
                showSlide(i);
            } else {
                hideSlide();
            }
        });
    });

});