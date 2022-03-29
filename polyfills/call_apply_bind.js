Function.prototype.myCall = function (currentContext = {}, ...args) {
  currentContext.fn = this;
  currentContext.fn(...args);
};

Function.prototype.myApply = function (currentContext = {}, args) {
  currentContext.fn = this;
  currentContext.fn(...args);
};

Function.prototype.myBind = function (obj, ...args) {
  const func = this;
  return function (...innerArgs) {
    func.call(obj, ...args, ...innerArgs);
  };
};

//EXAMPLE
const obj1 = {
  first: "Hello",
  last: "smile",
  greeting: function (zone) {
    console.log(`${this.first + " " + this.last} is ${zone} his comfort zone`);
  },
};

const obj2 = {
  first: "Bye",
  last: "cry",
};

obj1.greeting.myCall(obj2, "inside");
obj1.greeting.myApply(obj2, ["outside"]);

const newGreet = obj1.greeting.myBind(obj2);
newGreet("infront");
