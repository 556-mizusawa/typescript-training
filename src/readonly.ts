export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('556');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
// console.log(myVisaCard.owner);
