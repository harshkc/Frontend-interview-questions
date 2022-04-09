//Execute all methods parallely and push the results to somewhere
//basically this method doesn't ensure particular order and depends on
//time taken for completion

function asyncParallel(taskList, resultsCallback) {
  const result = [];
  let completionCounter = 0;
  taskList.forEach((asyncTask) => {
    asyncTask((value) => {
      result.push(value);
      completionCounter++;
      if (completionCounter === taskList.length) {
        resultsCallback.call(null, result);
      }
    });
  });
}

let globalNum = 0;
function createAsyncTask() {
  const value = globalNum++;
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, (value + Math.floor(Math.random() * 10)) * 1000);
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
