Array.prototype.myFlatten = function flatten(inputArray = this, resultArray = []) {
  for (let elem of inputArray) {
    if (Array.isArray(elem)) {
      flatten(elem, resultArray);
    } else resultArray.push(elem);
  }
  return resultArray;
};

// let inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];
// let inputArray = [[1, 2, 3, 4, [1]]];
let inputArray = [
  [1],
  [
    [1, 4, [5, 3]],
    [1, 2, 3, [3, 4, [2, [22, [3, 4, 5, 6, 5, [2]]]]], 4],
  ],
];

console.log(inputArray.myFlatten());
