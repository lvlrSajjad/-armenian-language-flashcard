import { useState } from 'react'
import './App.css'
import { CategorySelection } from './components/CategorySelection'
import { DeckSelection } from './components/DeckSelection'
import { FlashCardView } from './components/FlashCardView'
import { SEO } from './components/SEO'
import { categories } from './data/vocabulary'
import type { Deck, Category } from './types'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSelectDeck = (deck: Deck) => {
    setSelectedDeck(deck);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedDeck(null);
  };

  const handleBackToDecks = () => {
    setSelectedDeck(null);
  };

  // Show category selection if no category is selected
  if (!selectedCategory) {
    return (
      <>
        <SEO />
        <main>
          <CategorySelection categories={categories} onSelectCategory={handleSelectCategory} />
        </main>
      </>
    );
  }

  // Show deck selection if category is selected but no deck
  if (!selectedDeck) {
    return (
      <>
        <SEO />
        <main>
          <DeckSelection
            category={selectedCategory}
            onSelectDeck={handleSelectDeck}
            onBack={handleBackToCategories}
          />
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
