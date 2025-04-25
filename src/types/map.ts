export interface Circle {
  cx: number;
  cy: number;
}

export type MapProps = {
  activeCircles: Circle[];
};

export interface CityTypes {
  name: string;
  email: string;
  tel: string;
  address: string;
  numberaccount: string;
  nip: string;
  krs: string;
  regon: string;
  url: string;
}

export type City = {
  [city: string]: CityTypes;
};
