export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Darvish: Pitcher1 = {
  throwingSpeed: 158,
};

const Ichiro: Batter1 = {
  battingAverage: 0.387,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
