const socials = ['Twitter', 'LinkedIn', 'Facebook', 'YouTube'];

// console.log(socials.__proto__);

// socials.forEach(function(el) {
//     console.log(el);
// });

socials.forEach((el, ind, arr) => console.log(`${ind} - ${el}`, arr));

function logSocials(social) {
    console.log(social);
}

socials.forEach(logSocials);