// we assume all the functions to be promisified have this signature:
// fn(function callback(error, result){ ... }, ...otherArgs);
export function promisify(fn) {
  // TODO: return a function calling fn with the signature above
  // but taking no callback argument and returning a Promise instead
  const promise = (...otherArgs) =>
    new Promise((resolve, reject) => {
      const callback = (error, result) =>
        error ? reject(error) : resolve(result);
      console.log(...otherArgs);
      fn(callback, ...otherArgs);
    });
  console.log(promise);
  return promise;
}

export function promisify2(fn) {
  // TODO: return a function calling fn with the signature above
  // but taking no callback argument and returning a Promise instead
  return function (...args) {
    const promise = new Promise((resolve, reject) => {
      const callback = (error, result) =>
        error ? reject(error) : resolve(result);
      fn(callback, ...args);
    });
    return promise;
  };
}

// example:
const wait = promisify(setTimeout);
wait(1000)
  .then(() => {
    console.log("1");
    return wait(1000);
  })
  .then(() => {
    console.log("2");
    return wait(1000);
  })
  .then(() => {
    console.log("3");
  });
