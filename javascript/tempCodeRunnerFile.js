let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [7, 8, 9, 10, 11, 12];

let arr3 = arr1;
// console.log(arr3.length);
let init = arr3.length;
// console.log(init);

let condition = arr3.length + arr2.length;
// console.log(condition);

let count = 0;

for (let i = init; i < condition; i++) {
  arr3[i] = arr2[count];
  count++;
}
console.log(arr3);