export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public midleName: string,
      public lastName: string
    ) {}

    fullName() {
      return `${this.firstName} ${this.midleName} ${this.lastName}`;
    }
  }
}

const friend = new Japanese.Tokyo.Person('Ryo');
console.log(friend.name);

const me = new Japanese.Osaka.Person('Kougoro');
console.log(me.name);

const ericClapton = new English.Person('Eric', 'Patrick', 'Clapton');
console.log(ericClapton);
console.log(ericClapton.fullName());
