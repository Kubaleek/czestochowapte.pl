interface Initiative {
  url: string;
  image: {
    url: string;
    name: string;
  };
}

export interface InitiativeSectionsResponse {
  inicjatywySekcjas: Initiative[];
}
