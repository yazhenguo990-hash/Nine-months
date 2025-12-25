
export type Dimension = 'E/I' | 'S/N' | 'T/F' | 'J/P';

export interface Question {
  id: number;
  text: string;
  dimension: Dimension;
  options: {
    text: string;
    value: string; // e.g., 'E' or 'I'
  }[];
}

export interface PersonalityType {
  code: string; // e.g., 'INFJ'
  name: string;
  tagline: string;
  description: string;
  traits: string[];
  compatibility: string[];
  advice: string;
  datingStyle: string;
}

export type ViewState = 'landing' | 'instructions' | 'quiz' | 'loading' | 'result';
