// Select DOM elements
const newItem = document.querySelector('.nItem');
const addItem = document.querySelector('.aItem');
// eventListener that add todos on the list and buttons
addItem.addEventListener('click', () => {
    // Insert todos
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = newItem.value;
    ul.appendChild(li);
    // Insert buttons div
    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'fontbuttons';
    li.appendChild(buttonDiv);
    // insert the remove button
    let remove = document.createElement('i');
    remove.className = 'fa fa-trash-o remove';
    buttonDiv.appendChild(remove);
    // insert the complete button
    let completed = document.createElement('i');
    completed.className = 'fa fa-check-square done';
    buttonDiv.appendChild(completed);

    // Emptying the input value
    newItem.value = '';
    //Dissapearing the image after 1st todo
    let img = document.querySelector('.notodos')
    img.style.display = 'none';
});