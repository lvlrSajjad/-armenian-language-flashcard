import { useState, useEffect } from 'react';
import type { WordProgress, Deck } from '../types';

export const useVocabulary = (deck: Deck) => {
  // Use lazy initialization - function only runs once on mount
  const [learning, setLearning] = useState<WordProgress[]>(() => {
    const saved = localStorage.getItem(`vocabularyProgress_${deck.id}`);
    if (saved) {
      const data = JSON.parse(saved);
      return data.learning || [];
    }
    return deck.words.map(word => ({
      word,
      timesCorrect: 0
    }));
  });

  const [reviewing, setReviewing] = useState<WordProgress[]>(() => {
    const saved = localStorage.getItem(`vocabularyProgress_${deck.id}`);
    if (saved) {
      const data = JSON.parse(saved);
      return data.reviewing || [];
    }
    return [];
  });

  const [mastered, setMastered] = useState<WordProgress[]>(() => {
    const saved = localStorage.getItem(`vocabularyProgress_${deck.id}`);
    if (saved) {
      const data = JSON.parse(saved);
      return data.mastered || [];
    }
    return [];
  });

  useEffect(() => {
    // Save to localStorage whenever state changes
    localStorage.setItem(`vocabularyProgress_${deck.id}`, JSON.stringify({
      learning,
      reviewing,
      mastered
    }));
  }, [learning, reviewing, mastered, deck.id]);

  const getCurrentWord = (): WordProgress | null => {
    // Prioritize learning, then reviewing
    const activeQueue = learning.length > 0 ? learning : reviewing;
    if (activeQueue.length === 0) return null;

    // Get random word from active queue
    const randomIndex = Math.floor(Math.random() * activeQueue.length);
    return activeQueue[randomIndex];
  };

  const markCorrect = (wordProgress: WordProgress) => {
    const newTimesCorrect = wordProgress.timesCorrect + 1;
    const updatedProgress = {
      ...wordProgress,
      timesCorrect: newTimesCorrect,
      lastReviewed: new Date()
    };

    if (newTimesCorrect >= 5) {
      // Move to mastered
      setLearning(prev => prev.filter(w => w.word.word !== wordProgress.word.word));
      setReviewing(prev => prev.filter(w => w.word.word !== wordProgress.word.word));
      setMastered(prev => [...prev, updatedProgress]);
    } else if (newTimesCorrect >= 2) {
      // Move to reviewing (if not already there)
      setLearning(prev => prev.filter(w => w.word.word !== wordProgress.word.word));
      setReviewing(prev => {
        const exists = prev.find(w => w.word.word === wordProgress.word.word);
        if (exists) {
          return prev.map(w => w.word.word === wordProgress.word.word ? updatedProgress : w);
        }
        return [...prev, updatedProgress];
      });
    } else {
      // Keep in learning
      setLearning(prev => prev.map(w =>
        w.word.word === wordProgress.word.word ? updatedProgress : w
      ));
    }
  };

  const markIncorrect = (wordProgress: WordProgress) => {
    const updatedProgress = {
      ...wordProgress,
      timesCorrect: 0,
      lastReviewed: new Date()
    };

    // Move back to learning queue
    setReviewing(prev => prev.filter(w => w.word.word !== wordProgress.word.word));
    setLearning(prev => {
      const exists = prev.find(w => w.word.word === wordProgress.word.word);
      if (exists) {
        return prev.map(w => w.word.word === wordProgress.word.word ? updatedProgress : w);
      }
      return [...prev, updatedProgress];
    });
  };

  const resetProgress = () => {
    setLearning(deck.words.map(word => ({
      word,
      timesCorrect: 0
    })));
    setReviewing([]);
    setMastered([]);
  };

  return {
    learning,
    reviewing,
    mastered,
    getCurrentWord,
    markCorrect,
    markIncorrect,
    resetProgress
  };
};
