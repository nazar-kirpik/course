const TREE = {
    value: 'h',
    left: {
        value: 'o',
        left: {
            value: 'u',
            left: {
                value: 's',
                left: {
                    value: 'e',
                    left: null,
                    right: null,
                },
                right: null,
            },
            right: {
                value: 't',
                left: null,
                right: null,
            } 
        },
        right: {
            value: 'l',
            left: {
                value: 'l',
                left: {
                    value: 's',
                    left: null,
                    right: null,
                },
                right: null,
            },
            right: {
                value: 'd',
                left: null,
                right: null,
            },
        },
    },
    right: {
        value: 'i',
        left: null,
        right: {
            value: 't',
            left: null,
            right: null,
        },
    },
};
let c = 0;
let toTheRight;
let arr = [];
let i = TREE;
let canAdd = true;
function dumbTree(arg) {
    while (arr.length < 5){
        let str = '';
        while (arg !== null) {
            console.log(toTheRight)
            str += arg.value;
            if (c === toTheRight && arg.right !== null) {
                arg = arg.right;
                dumbTree(arg);
            } else if (c === toTheRight && arg.right === null) {
                str = null;
                canAdd = false;
                break;
            } else if (c !== toTheRight){
                arg = arg.left;
            }
            c++;
        }
        toTheRight = c-1;
        c = 0;
        if (canAdd){
            arr.push(str);
        }
        str = '';
        arg = TREE;
        canAdd = true;
    }
    return [...arr];
}

console.log(dumbTree(i));