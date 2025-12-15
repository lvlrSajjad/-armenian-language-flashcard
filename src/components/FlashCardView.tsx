import { useState, useEffect } from 'react';
import { FlashCard } from './FlashCard';
import { ProgressBar } from './ProgressBar';
import { useVocabulary } from '../hooks/useVocabulary';
import type { WordProgress, Deck } from '../types';

interface FlashCardViewProps {
  deck: Deck;
  onBackToDecks: () => void;
}

export function FlashCardView({ deck, onBackToDecks }: FlashCardViewProps) {
  const {
    learning,
    reviewing,
    mastered,
    getCurrentWord,
    markCorrect,
    markIncorrect,
    resetProgress
  } = useVocabulary(deck);

  const [currentWord, setCurrentWord] = useState<WordProgress | null>(null);

  useEffect(() => {
    setCurrentWord(getCurrentWord());
  }, [learning, reviewing, mastered]);

  const handleKnew = () => {
    if (currentWord) {
      markCorrect(currentWord);
      // Small delay before showing next card
      setTimeout(() => {
        setCurrentWord(getCurrentWord());
      }, 300);
    }
  };

  const handleDidntKnow = () => {
    if (currentWord) {
      markIncorrect(currentWord);
      // Small delay before showing next card
      setTimeout(() => {
        setCurrentWord(getCurrentWord());
      }, 300);
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all progress?')) {
      resetProgress();
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <button className="back-button" onClick={onBackToDecks}>
            ← Back to Decks
          </button>
          <div className="header-title">
            <h1>🇦🇲 {deck.name}</h1>
            <p className="subtitle">{deck.description}</p>
          </div>
        </div>
      </header>

      <ProgressBar
        learning={learning.length}
        reviewing={reviewing.length}
        mastered={mastered.length}
      />

      <main className="app-main">
        {currentWord ? (
          <FlashCard
            wordProgress={currentWord}
            onKnew={handleKnew}
            onDidntKnow={handleDidntKnow}
          />
        ) : (
          <div className="completion-message">
            <div className="completion-card">
              <h2>🎉 Congratulations!</h2>
              <p>You've mastered all the words!</p>
              <button className="reset-button" onClick={handleReset}>
                Start Over
              </button>
              <button className="back-button-secondary" onClick={onBackToDecks}>
                Choose Another Deck
              </button>
            </div>
          </div>
        )}
      </main>

      {(learning.length > 0 || reviewing.length > 0) && (
        <footer className="app-footer">
          <button className="reset-link" onClick={handleReset}>
            Reset Progress
          </button>
        </footer>
      )}
    </div>
  );
}

