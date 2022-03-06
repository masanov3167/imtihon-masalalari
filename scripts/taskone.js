// birinchi masala
var arr = [5, 0, 0, 0, 2, 0, 1, 3, 0, 1, 1, 0, 0, 0];
function moveZeros (arr) {
    var res = arr.filter(el => el !== 0);
    return res.concat(new Array(arr.length - res.length).fill(0))
  }
  console.log(moveZeros(arr).join(''))