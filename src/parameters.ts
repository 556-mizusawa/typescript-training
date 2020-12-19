export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Kougoro', 32);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Ryo', 33];

debugProfile(...profile);

type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
