// return an object with values and keys inverted
// we assume all values to be strings
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  let invertedObj = {};
  for (let key in obj) {
    //   invertedObj[obj[key]] = key;
    Object.assign(invertedObj, { [obj[key]]: key });
  }
  return invertedObj;
}

export function invertKeysAndValues2(obj) {
  return Object.entries(obj).reduce(function (newObj, keyValuePair) {
    let key = keyValuePair[0];
    let value = keyValuePair[1];
    newObj[value] = key;
    return newObj;
  }, {});
}

export function invertKeysAndValues3(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(function ([key, value]) {
      return [value, key];
    })
    //[1,2,3].map(n => n*2) // [2,4,6]
  );
}
