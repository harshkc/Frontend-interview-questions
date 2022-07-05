//throttling function
function throttle(fn, delay) {
  let timer;
  let lastArgs;
  return function (...args) {
    const context = this;
    lastArgs = args;
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(context, lastArgs);
      clearTimeout(timer);
    }, delay);
  };
}

//check above throttle method
const throttleFn = throttle(function (a, b) {
  console.log(a + b);
  console.log("I ran", a, b);
}, 1000);

throttleFn(10, 20);
throttleFn(10, 20);
throttleFn(10, 20);
throttleFn(10, 20);
throttleFn(101, 20);
