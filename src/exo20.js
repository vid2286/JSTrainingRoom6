import data from "../__tests__/fakedata.json";

export const query = (array) =>
  Object.assign(array, {
    where(key, condition) {
      //TODO: filtering elements based on a condition on the value of property `key`
      const newArray = array.filter((user) => condition(user[key]));
      return query(newArray);
    },
    orderBy(key) {
      //TODO: sort elements based on the value of their property `key` sorted alphabetically
      return query(array.sort((a, b) => (a[key] < b[key] ? -1 : 1)));
    },
    take(number) {
      //TODO: return the N first elements of the list
      return query(array.slice(0, number));
    }
  });

// example
console.log(
  query(data)
    .where("age", (n) => n >= 18)
    .orderBy("lastName")
    .take(5)
    .map((user) => `${user.firstName} ${user.lastName}`)
    .join("\n")
);
