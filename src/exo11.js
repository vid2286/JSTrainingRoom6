export function deduplicateArray1(arr) {
  // TODO: remove duplicate values in the array and return the filtered array
  // 1 - with filter and indexOf methods
  return arr.filter(function (item, pos) {
    return arr.indexOf(item) === pos;
  });
}

export function deduplicateArray(arr) {
  // TODO: remove duplicate values in the array and return the filtered array
  // 2 - with a Set and spread operator
  return [...new Set(arr)];
}

export function getPropertyFromValue1(obj, val) {
  // TODO: return the name of the first property of `obj` with value `val`, or null if not found
  // 1 - with find and Object.keys methods
  return Object.keys(obj).find((key) => obj[key] === val);
}

export function getPropertyFromValue(obj, val) {
  // TODO: return the name of the first property of `obj` with value `val`, or null if not found
  // 2 - with a Map and Object.entries
  return new Map(Object.entries(obj).map(([key, value]) => [value, key])).get(
    val
  );
}
