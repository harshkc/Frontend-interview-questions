//memoization
function memoization(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      console.log("from cache");
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    console.log("from function");
    return result;
  };
}

const memoizedAdd2 = memoization(function (a, b) {
  return a + b;
});

memoizedAdd2(10, 20);
memoizedAdd2(10, 20);
memoizedAdd2(20, 10);
memoizedAdd2(20, 10);
