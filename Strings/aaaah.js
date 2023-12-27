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

let arr = [];
let wordArr = [];
arr.push(TREE.value);
function dumbTree() {
    
}