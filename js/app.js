const newItem = document.querySelector('.nItem');
const addItem = document.querySelector('.aItem');

addItem.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    let img = document.querySelector('.notodos')
    li.textContent = newItem.value;
    ul.appendChild(li);
    newItem.value = '';
    img.style.display = 'none';

});