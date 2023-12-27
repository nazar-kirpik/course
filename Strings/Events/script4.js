const form = document.getElementById('item-form');

function onSubmit(e) {
    e.preventDefault();

    const item = document.getElementById('item-input').value;
    const priotiry = document.getElementById('priority-input').value;

    if (item === '' || priotiry === '0') {
        alert('Please fill');
        return;
    }

    console.log(item, priority);
}

function onSubmit2(e) {
    e.preventDefault();

    const formData = new formData(form);

    const item = formData.get('item');
    const item2 = formData.get('priority');

    const entries = formData.entries();
    console.log(entries);

    for (let entry of entries) {
        console.log(entry);
    }

    // console.log(item, priority);
} 

form.addEventListener('submit', onSubmit);