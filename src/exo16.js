export function Person(first, name) {
  // TODO: assign first and name as own properties
  this.first = first;
  this.name = name;
}

Object.assign(Person.prototype, {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
});

export function User(first, name, rights) {
  // TODO: call Person constructor with the right context
  //new Person(first, name)
  Person.call(this, first, name);
  // TODO: assign rights as own property
  this.rights = rights;
}

// TODO: set Person.prototype as prototype of User.prototype
Object.setPrototypeOf(User.prototype, Person.prototype);

Object.assign(User.prototype, {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
});

export const bob = new User("Bob", "Afett", ["create", "read"]);
