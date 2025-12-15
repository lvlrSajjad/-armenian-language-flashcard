import type { Deck } from '../types';
import './DeckSelection.css';

interface DeckSelectionProps {
  decks: Deck[];
  onSelectDeck: (deck: Deck) => void;
}

export function DeckSelection({ decks, onSelectDeck }: DeckSelectionProps) {
  const getDeckProgress = (deck: Deck) => {
    const saved = localStorage.getItem(`vocabularyProgress_${deck.id}`);
    if (!saved) {
      return { completed: false, masteredCount: 0, totalCount: deck.words.length };
    }

    const data = JSON.parse(saved);
    const masteredCount = data.mastered?.length || 0;
    const totalCount = deck.words.length;
    const completed = masteredCount === totalCount && totalCount > 0;

    return { completed, masteredCount, totalCount };
  };

  return (
    <div className="deck-selection">
      <header className="deck-header">
        <h1>🇦🇲 Armenian Vocabulary</h1>
        <p className="subtitle">Choose a deck to start learning</p>
      </header>

      <div className="deck-grid">
        {decks.map((deck) => {
          const progress = getDeckProgress(deck);
          return (
            <div
              key={deck.id}
              className="deck-card"
              onClick={() => onSelectDeck(deck)}
            >
              <h2>{deck.name}</h2>
              <p className="deck-description">{deck.description}</p>
              <div className="deck-stats">
                {progress.completed && (
                  <span className="completion-chip completed">✓ Completed</span>
                )}
                {!progress.completed && progress.masteredCount > 0 && (
                  <span className="completion-chip in-progress">
                    {progress.masteredCount}/{progress.totalCount} mastered
                  </span>
                )}
                <span className="word-count">{deck.words.length} words</span>
              </div>
              <button className="select-button">Start Learning →</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
