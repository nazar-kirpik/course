const myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'blue');
myMap.set(2, 'red');

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size);

console.log(myMap.has(1));
console.log(myMap.has(3));

myMap.delete(2);

const peopleMap = new Map();
peopleMap.set('brad', {phone: '555-555-5555', email: 'brad@gmail.com'});
peopleMap.set('jack', {phone: '555-555-5555', email: 'jack@gmail.com'});
peopleMap.set('jill', {phone: '555-555-5555', email: 'jill@gmail.com'});

peopleMap.forEach(person => {
    console.log(person.email);
});

console.log(peopleMap.keys());
