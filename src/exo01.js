// return true if parameter is a primitive, or false otherwise
export function isPrimitive(x) {
  return (typeof x !== "object" && typeof x !== "function") || x == null;
}
