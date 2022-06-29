//throttling function
function throttle(fn, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

//check above throttle method
const throttleFn = throttle(function (a, b) {
  console.log(a + b);
}, 1000);

throttleFn(10, 20);
throttleFn(10, 20);
throttleFn(10, 20);
throttleFn(10, 20);
throttleFn(10, 20);
