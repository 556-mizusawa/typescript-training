export {};

class Parson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Parson('Taro', 30);

console.log(taro);

type PersonType = typeof Parson;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Kougoro', 32];
const Kougoro = new Parson(...profile);

console.log(Kougoro);

type MyConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;
