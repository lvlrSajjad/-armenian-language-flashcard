import { useState } from 'react'
import './App.css'
import { DeckSelection } from './components/DeckSelection'
import { FlashCardView } from './components/FlashCardView'
import { SEO } from './components/SEO'
import { decks } from './data/vocabulary'
import type { Deck } from './types'

function App() {
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);

  const handleSelectDeck = (deck: Deck) => {
    setSelectedDeck(deck);
  };

  const handleBackToDecks = () => {
    setSelectedDeck(null);
  };

  // Show deck selection if no deck is selected
  if (!selectedDeck) {
    return (
      <>
        <SEO />
        <main>
          <DeckSelection decks={decks} onSelectDeck={handleSelectDeck} />
        </main>
      </>
    );
  }

  // Show flashcard view for selected deck
  return (
    <>
      <SEO
        title={`${selectedDeck.name} - Learn Eastern Armenian Flashcards`}
        description={`Practice ${selectedDeck.name} vocabulary in Eastern Armenian. Interactive flashcards for learning Armenian language.`}
        keywords={`Armenian ${selectedDeck.name}, Eastern Armenian vocabulary, learn Armenian ${selectedDeck.name}`}
      />
      <main>
        <FlashCardView deck={selectedDeck} onBackToDecks={handleBackToDecks} />
      </main>
    </>
  );
}

export default App
