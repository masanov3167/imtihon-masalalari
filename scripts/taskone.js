// birinchi masala
var array = [5, 0, 0, 0, 2, 0, 1, 3, 0, 1, 1, 0, 0, 0];
var newArr = [""];


var result1 = '';  // noldan katta sonlar
var result2 = '';  // nollar
for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        result1 += array[i];
    } else {
        result2 += array[i];
    }
}
console.log(result1 + result2);