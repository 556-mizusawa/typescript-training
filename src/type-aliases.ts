export {};

type Mojiretsu = string;

const fooString: string = 'Hello';

const fooMojiretsu: Mojiretsu = 'Hello';

const example1: {
  name: Mojiretsu;
  age: number;
} = {
  name: 'DLVI',
  age: 32,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile2 = {
  name: 'DLVI',
  age: 32,
};

type Profile2 = typeof example1;
