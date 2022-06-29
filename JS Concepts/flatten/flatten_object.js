let obj = {
  name: {
    first: "Harsh",
    last: "Freak",
  },
  address: {
    state: "vinewood",
    location: {
      area: "hillview",
      pincode: "2020202",
      city: "San Andreas",
    },
  },
  company: "LifeInvader",
  mentor: "CJ",
};

Object.prototype.myFlatten = function flatten(inputObj = this, resultObj = {}, parent = "") {
  const keys = Object.keys(inputObj);
  for (let key of keys) {
    let newKey = parent ? parent + `_${key}` : key;
    if (typeof inputObj[key] === "object") {
      flatten(inputObj[key], resultObj, newKey);
    } else resultObj[newKey] = inputObj[key];
  }
  return resultObj;
};

console.log(obj.myFlatten());
