const newItem = document.querySelector('.nItem');
const addItem = document.querySelector('.aItem');

addItem.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    let img = document.querySelector('.notodos')
    let buttonDiv = document.createElement('div');
    let completed = document.createElement('i');
    completed.className = 'fa fa-check-square done';
    let remove = document.createElement('i');
    remove.className = 'fa fa-trash-o remove';
    li.textContent = newItem.value;
    buttonDiv.className = 'fontbuttons';
    buttonDiv.appendChild(remove);
    buttonDiv.appendChild(completed);
    li.appendChild(buttonDiv);
    ul.appendChild(li);
    newItem.value = '';
    img.style.display = 'none';
});