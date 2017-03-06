export class Option {
  code: string;
  name: string;
  maxExtraCover: number;
  price: string;
  suboptions: Suboption[];
}

export class Suboption {
  code: string;
  name: string;
  maxExtraCover: number;
}

export class Service {
  code: string;
  name: string;
  options: Option[];
}
