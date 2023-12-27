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
        right: null,
    },
};
let c = 0;
let toTheRight = [];
let arr = [];
let i = TREE;
function dumbTree(arg) {
    console.log(toTheRight);
    let str = '';
    
    while (arg !== null) {
        str += arg.value;
        dumbTree(arg.left);
        dumbTree(arg.right);
        if (toTheRight.includes(c)) {
            break;
        }
        c++;
        if (arg.right != null){
            let rightStr = str;
            rightStr += arg.right.value;
            arr.push(rightStr);
        }
        if (arg.left != null){
            let leftStr = str;
            leftStr += arg.left.value;
            arr.push(leftStr);
        }
        arg = arg.left;
        
        console.log(arg);
    }
    toTheRight.push(c-1);
    c = 0;
    arr.push(str);
    arg = TREE;
    let finalArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== ''){
            finalArr.push(arr[i])
        }
    }
    return finalArr.reverse();
}

console.log(dumbTree(i));