'use client';

import React from 'react';
import RecipeCard from '../../components/RecipeCard';
import { useState } from 'react';

export default function ManagementPage() {
  const [items, setItems] = useState([]);
  const [itemTitle, setItemTitle] = useState('');
  const [itemIngredients, setItemIngredients] = useState('');
  const [itemAuthor, setItemAuthor] = useState('');

  const addItem = (e) => {
    e.preventDefault();

    const newItem = {
      id: Math.random(),
      title: itemTitle,
      ingredients: itemIngredients.split(','),
      author: itemAuthor,
    };

    setItems([...items, newItem]);
    setItemTitle('');
    setItemIngredients('');
    setItemAuthor('');
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen m-0">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Manage Recipes</h1>

        <form onSubmit={addItem}>
          <h2>Add New Recipe</h2>
          <input
            type="text"
            value={itemTitle}
            placeholder="Recipe Title"
            onChange={(e) => setItemTitle(e.target.value)}
          />
          <textarea
            value={itemIngredients}
            placeholder="Ingredients(...,...,..)"
            onChange={(e) => setItemIngredients(e.target.value)}
          ></textarea>
          <input
            type="text"
            value={itemAuthor}
            placeholder="Author"
            onChange={(e) => setItemAuthor(e.target.value)}
          />
          <button type="submit"> Add Recipe </button>
        </form>

        <div>
          {items.map((item) => (
            <RecipeCard
              key={item.id}
              cardNumber={item.id}
              recipeTitle={item.title}
              ingredients={item.ingredients.join(', ')}
              author={item.author}
              onDelete={() => deleteItem(item.id)} // Pass onDelete function for delete functionality
            />
          ))}
        </div>
      </div>
    </main>
  );
}
