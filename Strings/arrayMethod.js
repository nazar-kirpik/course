let ppl = [
    {
        firstName: 'Chris',
        lastName: 'Sus',
        age: 30,
        email: 'chris@gmail.com',
    },
    {
        firstName: 'Dumb',
        lastName: 'DANG',
        age: 12,
        email: 'dumb@gmail.com',
    },
    {
        firstName: 'Someone',
        lastName: 'Dolor',
        age: 25,
        email: 'someone@gmail.com',
    },
    {
        firstName: 'Example',
        lastName: 'Nice',
        age: 3435,
        email: 'example@gmail.com',
    },
]
const youngPpl = ppl.filter(a => a.age <= 25)
    .map((a) => {
        return {
            name: a.firstName + ' ' + a.lastName,
            email: a.email,
        }
    });
console.log(youngPpl);


const numbers = [2, -30, 50, 20, -12, -9, 7];
console.log(numbers.filter((el) => el > 0)
    .reduce((a, b) => a + b, 0))


const words = ['coder', 'programmer', 'developer'];
console.log(words.map(word => {
    a = word[0];
    return a.toUpperCase() + word.slice(1);
}))

