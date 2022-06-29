Array.prototype.myForEach = function (callback, context) {
  for (let i = 0; i < this.length; ++i) {
    if (this.indexOf(this[i]) > -1) {
      callback.call(context, this[i], i, this);
    }
  }
};

// example
const arr = [1, 2, 3, 4];

arr.myForEach((item, index) => {
  arr[index] = item * 2;
});
console.log(arr);

const words = ["adam", "ate", "an", "apple"];
const upperCaseList = [];
words.myForEach((word, index, context) => {
  upperCaseList.push(word.toUpperCase());
});
console.log(upperCaseList);
