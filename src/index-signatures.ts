export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [additional: string]: number | string | boolean;
}

let profile: Profile = { name: 'foo', underTwenty: false };

profile.name = 'Kougoro';
profile.age = 32;
profile.nationality = 'Japan';
