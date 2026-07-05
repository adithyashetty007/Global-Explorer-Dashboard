export interface Country {
  code: string;
  name: string;
  emoji: string;
  continent: Continent;
  languages: Language[];
}

export interface Continent {
  code: string;
  name: string;
}

export interface Language {
  code: string;
  name: string;
}