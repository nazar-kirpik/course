function registerUser(user = 'Bot'){
    return user + ' is registered';
}

console.log(registerUser('John'));

function sum(...numbers){
    let total = 0;

    for (const num of numbers){
        total += num
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5))

function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`
};

const user = {
    name: 'John',
    id: 1
}

console.log(loginUser (user))


function randInd(arr){
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand]
}