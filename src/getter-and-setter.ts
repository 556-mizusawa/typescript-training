export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる。
//   * 変更不可
//   * 参照できる。
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる。
//   * 途中で変更できる。
//   * 参照できない

class MyNumberCard {
  private owner: string;
  private secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this.owner = owner;
    this.secretNumber = secretNumber;
  }

  get _owner() {
    return this.owner;
  }

  set _secretNumber(secretNumber: number) {
    this.secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this.secretNumber}`;
  }
}

let card = new MyNumberCard('556', 1234567890);
console.log(card.debugPrint());
card._secretNumber = 1111111111;
console.log(card.debugPrint());
console.log(card._secretNumber);

// card._owner = 'DLVI';
console.log(card._owner);
// card.secretNumber;
