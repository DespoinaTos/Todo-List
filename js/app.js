const newItem = document.querySelector('.nItem');
const addItem = document.querySelector('.aItem');

addItem.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = newItem.value;
    ul.appendChild(li);
    newItem.value = '';
});