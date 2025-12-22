export interface Word {
  word: string;
  pronunciation: string;
  meaning: string;
}

export interface WordProgress {
  word: Word;
  timesCorrect: number;
  lastReviewed?: Date;
}

export interface Deck {
  id: string;
  name: string;
  description: string;
  words: Word[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  decks: Deck[];
}
