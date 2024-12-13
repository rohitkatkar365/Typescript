// Using square bracket
var arr = [1, 2, 3, 4, 5];
console.log(arr);
// Using Array Constructor
var arr1 = new Array(1, 2, 3, 4, 5, 6);
console.log(arr1);
// Using Array.of 
var arr2 = Array.of(1, 2, 3, 4);
console.log(arr2);
// Different types of values 
var arr3 = [1, 2, "Ram", 'a'];
console.log(arr3);
console.log(arr2[1]);
console.log(arr2.length);
arr.push(10);
console.log(arr);
arr.splice(0, 2, 100, 200);
console.log(arr);
arr.pop();
console.log(arr);
// Iterate:
// for(let i :number = 0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
// for(let n in arr)
// {
//     console.log(n);
// }
// for(let a of arr3)
// {
//     console.log(a);
// }
// map
var arr4 = arr.map(function (ele, index) {
    return ele * 5;
});
console.log(arr4);
// filter
var arr5 = arr2.filter(function (ele, ind) {
    if (ind % 2 == 0) {
        return ele * 2;
    }
});
console.log(arr5);
// reduce
var sum = arr2.reduce(function (ele, curr) {
    ele += ele + curr;
    return ele;
});
console.log(sum);
