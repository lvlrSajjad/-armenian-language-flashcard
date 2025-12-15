import { useState } from 'react';
import './FlashCard.css';
import type {WordProgress} from "../types.ts";

interface FlashCardProps {
  wordProgress: WordProgress;
  onKnew: () => void;
  onDidntKnow: () => void;
}

export const FlashCard = ({ wordProgress, onKnew, onDidntKnow }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Calculate font size based on word length
  const getFontSize = (word: string): string => {
    const length = word.length;
    if (length <= 8) return '3rem';      // Normal size for short words
    if (length <= 12) return '2rem';     // Slightly smaller
    if (length <= 16) return '1.5rem';   // Medium
    return '1rem';                        // Half size for very long words (like shnoragalutsyoun)
  };

  const handleFlip = () => {
    setIsFlipped(true);
  };

  const handleKnew = () => {
    onKnew();
    setIsFlipped(false);
  };

  const handleDidntKnow = () => {
    onDidntKnow();
    setIsFlipped(false);
  };

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
        {!isFlipped ? (
          <div className="card-front">
            <div
              className="armenian-word"
              style={{ fontSize: getFontSize(wordProgress.word.word) }}
            >
              {wordProgress.word.word}
            </div>
            <button className="tap-to-reveal" onClick={handleFlip}>
              Tap to see meaning →
            </button>
          </div>
        ) : (
          <div className="card-back">
            <div
              className="armenian-word"
              style={{ fontSize: getFontSize(wordProgress.word.word) }}
            >
              {wordProgress.word.word}
            </div>
            <div className="pronunciation">/{wordProgress.word.pronunciation}/</div>
            <div className="meaning">{wordProgress.word.meaning}</div>

            <div className="action-buttons">
              <button className="btn-knew" onClick={handleKnew}>
                ✓ I knew this word
              </button>
              <button className="btn-didnt-know" onClick={handleDidntKnow}>
                ✗ I didn't know this word
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
