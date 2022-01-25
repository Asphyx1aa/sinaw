const langPicker = document.querySelector('#change-lang');
const listLang = document.querySelector('#list-lang');

langPicker.addEventListener('click',() => {
    listLang.style.display = 'block';
    console.log('click')
});

const searchInput = document.querySelector('.hero-search__input');
const learnSuggestion = document.querySelectorAll('.suggestion-list__button');

learnSuggestion.forEach(e => {
    e.addEventListener('click', () => {
        searchInput.value = e.textContent;
    })
})

const menuToggle = document.querySelector('.menu-button');
let isMenuOpen = false;

menuToggle.addEventListener('click', () => {
    if(!isMenuOpen) {
        menuToggle.classList.add('open');
        isMenuOpen = true;
    } else {
        menuToggle.classList.remove('open');
        isMenuOpen = false;
    }
})