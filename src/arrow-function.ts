export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.65, 60));

// let bmi = <T>(height: T, weight: T): T => weight / (height * height);

// console.log(bmi(1.65, 60));
