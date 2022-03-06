// taskTwo.js

var arr = [true, false, true, true, true, false, false, false, false, false];
var count = 0;
for (var i = 0; i < arr.length; i++){

    if(arr[i] == true){
        count++;
    }
}

console.log(count);