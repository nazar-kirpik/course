try {
    console.log(x)
} catch (error) {
    console.log('sus')
}

function double(num) {
    if (isNaN(num)) {
        throw new Error(num + ' is not a number');
    }
    return num * 2;
}

try {
    const y = double(1);
    console.log(y)
} catch (error) {
    console.log('ERROR');
}