//Polyfill for map
Array.prototype.myMap = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) {
      newArray[i] = callback(this[i], i, this);
    }
  }
  return newArray;
};

//example
const arr = [1, 2, 3, 4];
arr[10] = 34;
console.log(
  arr.myMap((item) => {
    return item * 2;
  })
);

//polyfill for filter
Array.prototype.myFilter = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

// example
const numbers = [1, 2, 3, 4];
const even = numbers.myFilter((item) => item % 2 === 0);
console.log(even);

//polyfill for reduce
Array.prototype.myReduce = function (callback, initalValue) {
  let accum = initalValue || (typeof this[0] === "string" ? "" : 0);
  for (let i = 0; i < this.length; i++) {
    accum = callback.call(this[i], accum, this[i]);
  }
  return accum;
};

//EXAMPLES
const nums = [1, 2, 3, 4];
const value = nums.myReduce((acc, current) => {
  return acc + current;
}, 10);
console.log(value);

const queryString = "cat=meow&duck=quack&dog=woof";
const queryObject = queryString.split("&").myReduce((accum, current) => {
  const splitString = current.split("=");
  accum[splitString[0]] = splitString[1];
  return accum;
}, {});
console.log(queryObject);

//Use Reduce as Map
console.log(
  arr.reduce((acc, current, index) => {
    acc[index] = current * 2;
    return acc;
  }, [])
);
