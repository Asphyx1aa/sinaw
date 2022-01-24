const langPicker = document.querySelector('#change-lang');
const listLang = document.querySelector('#list-lang');

langPicker.addEventListener('click',() => {
    listLang.style.display = 'block';
    console.log('click')
});