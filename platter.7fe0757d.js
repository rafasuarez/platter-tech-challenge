window.addEventListener('DOMContentLoaded', ()=>{
    const loadMorebutton = document.querySelector('.js-toggle-button');
    const carouselContainer = document.querySelector('.js-carousel-element');
    if (!loadMorebutton || !(carouselContainer instanceof HTMLElement)) return;
    const setupToggleButton = ()=>{
        let expanded = false;
        loadMorebutton.addEventListener('click', ()=>{
            expanded = !expanded;
            carouselContainer.classList.toggle('grid-rows-[1fr_1fr_0fr_0fr_0fr]', !expanded);
            carouselContainer.classList.toggle('grid-rows-[1fr_1fr_1fr_1fr_1fr]', expanded);
            loadMorebutton.textContent = expanded ? 'Show Less' : 'Show More';
        });
    };
    setupToggleButton();
});

//# sourceMappingURL=platter.7fe0757d.js.map
