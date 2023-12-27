const logo = document.querySelector('img');

const onClick = () => console.log('click');
const onDoubleClick = () => {
    if (document.body.backgroundColor !== 'purple'){
        document.body.backgroundColor = 'purple';
        document.body.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};
const onRightClick = () => console.log('right click');
const onMouseDown = () => console.log('mouse down click');

logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
