const logo = document.querySelector('img');

function onClick(e) {
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.type)
    // console.log(e.clientX);
    // console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
}

logo.addEventListener('click', onClick);

document.body.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
});