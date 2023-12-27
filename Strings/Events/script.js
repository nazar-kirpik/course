const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML = '';

    // items.array.forEach(item => {
    //     item.remove();
    // });

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

// JS

// clearBtn.onclick = function() {
//     alert('Clear');
// };


// clearBtn.addEventListener('click', function() {
//     alert('clear');
// })

clearBtn.addEventListener('click', onClear);

setTimeout(() => {
    clearBtn.removeEventListener('click', onClear)
}, 5000);