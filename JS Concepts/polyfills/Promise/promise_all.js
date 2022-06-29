//returns single promise which contains the value of all resolved promises that have been passed
// returns promise with results in an array

function promiseAll(promiseList) {
  let results = [];
  let counter = 0;
  return new Promise((res, rej) => {
    promiseList.forEach((promise, index) => {
      promise
        .then((data) => {
          results[index] = data;
          counter++;
          if (counter === promiseList.length) {
            res(results);
          }
        })
        .catch((error) => {
          rej(error);
        });
    });
  });
}

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
const taskList = [task(1000), task(5000), task(3000)];

promiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
