//Execute all methods parallely and push the results to somewhere
//basically this method doesn't ensure particular order and depends on
//time taken for completion

function asyncParallel(taskList, resultsCallback) {
  let result = [];
  let counter = 0;
  taskList.forEach((task, index) => {
    task((val) => {
      result.push(val);
      counter++;
    });
    if (counter === taskList.length) resultsCallback(result);
  });
}

let globalNum = 0;
function createAsyncTask() {
  const value = globalNum++;
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, Math.floor(Math.random() * 10) * 1000);
  };
}

const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];
asyncParallel(taskList, (result) => {
  console.log("got the results", result);
});
