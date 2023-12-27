const x = 100;
const y = 50;

function getSum(n1, n2){
    const sum = n1 + n2;
    return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);
// if (toTheRight.includes(c)) {
        //     let leftStr = str;
        //     leftStr += arg.left.value;
        //     arr.push(leftStr);
        //     arg = arg.right;
        //     // if (arg === null){
        //     //     break;
        //     // }
        //     // let a = arg;
        //     // dumbTree(a);
        // } else {
        //     arg = arg.left;
        // }