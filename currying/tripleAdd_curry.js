//triple add using currying and normal method
function tripleAdd() {
  const outerArgs = arguments;
  if (arguments.length === 3) {
    return arguments[0] + arguments[1] + arguments[2];
  }
  return function () {
    const innerArgs = arguments;
    return function () {
      return outerArgs[0] + innerArgs[0] + arguments[0];
    };
  };
}

console.log(tripleAdd(10)(20)(30));
console.log(tripleAdd(10, 20, 30));
