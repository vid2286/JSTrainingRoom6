// try to solve the exercise using spread and rest operators

// TODO: return an object with properties being the list of received arguments,
// and the number of times each argument has been received as values
export function count(...args) {
  let result = args.reduce(function (count, arg) {
    if (arg in count) {
      count[arg]++;
    } else {
      count[arg] = 1;
    }
    return count;
  }, {});
  return result;
}

export function count2(...args) {
  return args.reduce(function (count, arg) {
    return { ...count, [arg]: (count[arg] || 0) + 1 };
  });
}

// example:
count("Carrot", "Cabbage", "Potato", "Cabbage", "Cabbage", "Carrot");
// { Carrot: 2, Cabbage: 3, Potato: 1 }

// TODO: return the argument that occurs the most times in the argument list
export function mostFrequentIn(...args) {
  const countByArg = count(...args);
  Object.values(countByArg);
  const max = Math.max(...Object.values(countByArg));
  return args.find((arg) => countByArg[arg] === max);
}

// example:
mostFrequentIn(
  "Carrot",
  "Cabbage",
  "Potato",
  "Cabbage",
  "Cabbage",
  "Carrot"
) === "Cabbage";
