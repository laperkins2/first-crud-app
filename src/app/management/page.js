'use client';

import React from 'react';
import RecipeCard from '../../components/RecipeCard';
import { useState } from 'react';
import next from 'next';

export default function ManagementPage() {
  const [items, setItems] = useState([]);
  const [itemTitle, setItemTitle] = useState('');
  const [itemIngredients, setItemIngredients] = useState('');
  const [itemAuthor, setItemAuthor] = useState('');
  const [idNumber, setIdNumber] = useState(4);
  const [editItemId, setEditItemId] = useState(null);

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
    setIdNumber(idNumber + 1);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    let itemToEdit = items.find((item) => item.id == id);
    if (itemToEdit) {
      setEditItemId(id);
      setItemTitle(itemToEdit.title);
      setItemIngredients(itemToEdit.ingredients.join(','));
      setItemAuthor(itemToEdit.author);
    }
  };

  const updateItem = (e) => {
    e.preventDefault();

    let index = items.findIndex((item) => item.id === editItemId);
    if (index !== -1) {
      let updatedItems = [...items];
      updatedItems[index] = {
        id: editItemId,
        title: itemTitle,
        ingredients: itemIngredients.split(','),
        author: itemAuthor,
      };

      setItems(updatedItems);
      setEditItemId(null);
      setItemTitle('');
      setItemIngredients('');
      setItemAuthor('');
    }
  };

  return (
    <main className="min-h-screen m-0 flex flex-col items-center justify-between p-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Manage Recipes</h1>

        <form
          onSubmit={editItemId !== null ? updateItem : addItem}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-2">Add New Recipe</h2>
          <input
            type="text"
            value={itemTitle}
            placeholder="Recipe Title"
            onChange={(e) => setItemTitle(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-white text-black border border-gray-300 rounded-md"
          />
          <textarea
            value={itemIngredients}
            placeholder="Ingredients(...,...,..)"
            onChange={(e) => setItemIngredients(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-white text-black border border-gray-300 rounded-md"
          ></textarea>
          <input
            type="text"
            value={itemAuthor}
            placeholder="Author"
            onChange={(e) => setItemAuthor(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-white text-black border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm"
          >
            {editItemId !== null ? 'Update Recipe' : 'Add Recipe'}
          </button>
        </form>

        <div>
          {items.map((item, index) => (
            <RecipeCard
              key={item.id}
              cardNumber={4 + index}
              recipeTitle={item.title}
              ingredients={item.ingredients.join(', ')}
              author={item.author}
              onDelete={() => deleteItem(item.id)}
              onEdit={() => editItem(item.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
