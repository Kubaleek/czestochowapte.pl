interface Partners {
  url: string;
  image: {
    url: string;
    name: string;
  };
}

export interface PartnersSectionsResponse {
  partners: Partners[];
}
