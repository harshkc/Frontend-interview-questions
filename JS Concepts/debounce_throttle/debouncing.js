//debouncing function
function debounce(fn, delay) {
  let timer;
  return function () {
    const context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

//check above debounce function
const debounced = debounce(function () {
  console.log("debounced");
}, 1000);

debounced();
debounced();
debounced();
debounced();
