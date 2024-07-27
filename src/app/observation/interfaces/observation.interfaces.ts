export interface SearchResponse {
  status:  string;
  message: string;
  code:    string;
  results: Results;
}

export interface Results {
  total: Total[];
}

export interface Total {
  _id:          ID;
  nameQuestion: string;
  nameOpcion:   string[];
}

export interface ID {
  idQuestion: number;
}
