export {};

class Parson {
  constructor(public name: string, protected age: number) {}
}

const me = new Parson('556', 32);
console.log(me);
