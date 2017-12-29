// Select DOM elements
const newItem = document.querySelector('.nItem');
const addItem = document.querySelector('.aItem');
const container = document.querySelector('.container');


// eventListener that add todos on the list and buttons
addItem.addEventListener('click', () => {
    // Insert todos
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = newItem.value;
    if (newItem.value.length != 0) {
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
    } else {

    }
});
//event listener for removing todos and complete todos
container.addEventListener('click', (event) => {
    const lis = document.getElementsByTagName('li');
    if (event.target.tagName == 'I') {
        // Remove a todo
        if (event.target.className == 'fa fa-trash-o remove') {
            let li = event.target.parentNode.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
            if (lis.length == 0) {
                let img = document.querySelector('.notodos')
                img.style.display = 'block';
            }
        }
        // Pressing the complete button
        if (event.target.className == 'fa fa-check-square done') {
            event.target.style.color = '#00DC96';
            event.target.parentNode.parentNode.style.opacity = '0.4';
        }
    }
});