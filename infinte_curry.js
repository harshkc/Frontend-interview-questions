//infinte sum of numbers using currying
function sum(num1) {
  return function (num2) {
    if (num2) {
      return sum(num1 + num2);
    } else {
      return num1;
    }
  };
}

console.log(sum(10)(20)(30)(40)());
