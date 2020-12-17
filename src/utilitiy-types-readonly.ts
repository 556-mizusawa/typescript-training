export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Kougoro',
  age: 32,
};

me.age++;

console.log(me);

type PaersonalDataType = Readonly<Profile>;

const friend: PaersonalDataType = {
  name: 'Ryo',
  age: 33,
};

console.log(friend);

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
