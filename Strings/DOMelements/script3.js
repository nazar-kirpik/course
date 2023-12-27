// Quick & Dirty

function createListItem(item) {
    const li = document.createElement('li');

    li.innerHTML = ``;

    document.querySelector('.items').appendChild(li);
}

// Clean & Performant

function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))

    const button = createButton('')

    const icon = document.createElement('i');
    icon.className = '';

    button.appendChild(icon);
    li.appendChild(button);



}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('')
    button.className = '';

    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}