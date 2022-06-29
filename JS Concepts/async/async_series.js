//Execute all methods serially and push the results to somewhere
//basically this method should ensure particular order and not depend on
//random time taken for completion

function asyncParallel(taskList, resultsCallback) {
  const result = [];
  let completionCounter = 0;
  taskList.reduce((accum, current) => {
    return accum.then((somevalue) => {
      return new Promise((res) => {
        current((value) => {
          result.push(value);
          completionCounter++;
          if (completionCounter === taskList.length) {
            resultsCallback.call(null, result);
          } else {
            res(value);
          }
        });
      });
    });
  }, Promise.resolve());
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
