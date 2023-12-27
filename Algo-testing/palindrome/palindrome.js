function palindrome(str) {
    str = str.toLowerCase();
    if (str.split('').includes(' ')) {
        return false;
    }

    if (str.split('').reverse().join('') === str) {
        return true
    }
    return false
}

module.exports = palindrome;