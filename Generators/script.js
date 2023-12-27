// const app = {
//     nextIndex: 0,
//     teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
//     next() {
//         if (this.nextIndex >= this.teams.length) {
//             return {done: true}
//         }

//         const returnValue = {value: this.teams[this.nextIndex], done: false}
//         this.nextIndex++;
//         return returnValue;
//     },
// };

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

const app = {
    teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
    [Symbol.iterator]: function () {
        let nextIndex = 0;
        return {
            next: () => {
                return nextIndex < this.teams.length ? {value: this.teams[nextIndex++], done: false} : {done: true};
            }
        }
    }
}

const iterator = app[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

for (const team of app) {
    console.log(team);
}
    
// const sym = Symbol();
// const sym1 = Symbol('foo');
// const sym2 = Symbol('bar');

// console.log(sym, sym1, sym2);
// console.log(typeof sym);
// console.log(sym1.description);

// // Symbols are unique
// console.log(Symbol('sym') === Symbol('sym'))

// const user = {
//     [Symbol('id')]: 1,
//     name: 'John Doe',
//     email: 'john@gmail.com'
// };

// // 5ymb015 4r3 n07 3num3r4b13
// console.log(Object.keys(user));
// console.log(Object.values(user));

// for (let key in user) {
//     console.log(key);
// }

// // getOwnPropertySymbols
// console.log(Object.getOwnPropertySymbols(user));

// // Symbol.for()
// const sym3 = Symbol.for('foo');
// const sym4 = Symbol.for('foo');

// console.log(sym3 === sym4);

// console.log(Symbol.keyFor(sym3));

// console.log(sym1.toString());