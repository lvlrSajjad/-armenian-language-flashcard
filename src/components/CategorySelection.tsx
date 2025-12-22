import type { Category } from '../types';
import './CategorySelection.css';

interface CategorySelectionProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

export function CategorySelection({ categories, onSelectCategory }: CategorySelectionProps) {
  return (
    <div className="category-selection">
      <header className="category-selection-header">
        <h1>🇦🇲 Armenian Vocabulary</h1>
        <p className="subtitle">Choose a category to start your learning journey</p>
      </header>

      <div className="category-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => onSelectCategory(category)}
          >
            <h2>{category.name}</h2>
            <p className="category-description">{category.description}</p>
            <div className="category-stats">
              <span className="deck-count">{category.decks.length} decks</span>
            </div>
            <button className="select-category-button">Explore →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

