export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(typeof echo(556));
console.log(typeof echo('556'));
console.log(typeof echo(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror(123).echo());
console.log(typeof new Mirror(123).echo());
console.log(new Mirror('123').echo());
console.log(typeof new Mirror('123').echo());
console.log(new Mirror(true).echo());
console.log(typeof new Mirror(true).echo());
