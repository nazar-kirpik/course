const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');

button.addEventListener('click', () => {
    alert('Button was clicked');
})

div.addEventListener('click', () => {
    alert('Div was clicked');
})