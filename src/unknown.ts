export {};

const kansu = (): number => 556;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// console.log(typeof numberUnknown); // typeofによってnumberと判断できる
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
