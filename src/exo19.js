export const addAliasForProperties = (object, alias) => {
  // TODO: return a Proxy for `object`
  // allowing to declare aliases for some properties
  // the alias can be used for both reading or writing a value on the aliased property
  return new Proxy(object, {
    set(object, aliasKey, val) {
      return Reflect.set(
        object,
        aliasKey in alias ? alias[aliasKey] : aliasKey,
        val
      );
      //return Reflect.set(object, (aliasKey in object? aliasKey : alias[aliasKey]), val);
    },
    get(object, aliasKey) {
      return Reflect.get(
        object,
        aliasKey in alias ? alias[aliasKey] : aliasKey
      );
      //return Reflect.get(object, (aliasKey in object? aliasKey : alias[aliasKey]));
    }
  });
  //return object;
};

// example:
const originalUser = { name: "Sanchez", first: "Rick" };
const user = addAliasForProperties(originalUser, {
  lastName: "name",
  firstName: "first"
});

{
  first: "name";
}
// `${user.firstName} ${user.lastName}` === "Rick Sanchez"

export const countFunctionCalls = (fn) => {
  // TODO: return a Proxy for function `fn`
  // allowing to count the number of times this function has been called
  // the count can be retrieved with `fn.count`
  let count = 0;
  return new Proxy(fn, {
    apply(fn, context, args) {
      count++;
      return Reflect.apply(fn, context, args);
    },
    get(fn, prop) {
      return prop === "count" ? count : Reflect.get(fn, prop);
    }
  });
  //return fn;
};

// example:
const fn = countFunctionCalls((n) => n * 2);
fn(1);
fn(2);
fn(999);

// fn.count === 3
