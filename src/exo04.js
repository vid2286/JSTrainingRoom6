export function spyOnProperty(obj, prop, onRead, onWrite) {
  // change the descriptor of property `prop` of `obj`:
  // - call onRead() when property is accessed
  // - call onWrite(newValue) when property is reassigned
  // these functions are just observers, they do not return anything
  // however it should still be possible to read and write a value for property `prop`
  let value = obj[prop];
  Object.defineProperty(obj, prop, {
    get: function () {
      onRead();
      return value;
    },
    set: function (newValue) {
      onWrite(newValue);
      value = newValue;
    }
  });
}

export function setPrivatesAndConstants(obj) {
  // change the descriptor of every property of the object:
  // properties with names starting with an underscore _ must be non enumerable
  // properties with names in uppercase letters must be non writable and non configurable
  Object.keys(obj).forEach(function (prop) {
    Object.defineProperty(obj, prop, {
      enumerable: !prop.startsWith("_"),
      writable: prop !== prop.toUpperCase(),
      configurable: prop !== prop.toUpperCase()
    });
  });
  /*for(let prop in obj){
    Object.defineProperty(obj, prop, {
      enumerable: !prop.startsWith("_"),
      writable: prop !== prop.toUpperCase(),
      configurable: prop !== prop.toUpperCase()
    })
  }*/
}
