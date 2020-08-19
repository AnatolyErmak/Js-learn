const arr = [2,3 ,6,8];

arr.forEach(function(any, i, arr) {
    console.log(`${i}: ${any} внутри массива ${arr}`)
});

/* arr[99] = 0;

console.log (arr.length); */


/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

for (let value of arr) {
    console.log(value);
}

const str = prompt('', '');
const products = str.split(', ');
console.log(products);