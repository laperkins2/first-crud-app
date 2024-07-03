'use client';

import React from 'react';
import RecipeCard from '../../components/RecipeCard';
import { useState, useEffect } from 'react';
import RegistrationForm from '@/components/RegisterForm';
import {
  getAllDocuments,
  addDocument,
  updateDocument,
  deleteDocument,
} from '@/utils/firebaseUtils';

export default function ManagementPage() {
  const [items, setItems] = useState([]);
  const [itemTitle, setItemTitle] = useState('');
  const [itemIngredients, setItemIngredients] = useState('');
  const [itemAuthor, setItemAuthor] = useState('');
  // const [idNumber, setIdNumber] = useState(4);
  const [editItemId, setEditItemId] = useState(null);
  const [availableRecipes, setAvailableRecipes] = useState(0);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const documents = await getAllDocuments('recipes');
        setItems(documents);
        setAvailableRecipes(documents.length);
      } catch (error) {
        console.error('Not able to fetch:', error);
      }
    };

    fetchDocuments();
  }, []);

  const addItem = async (e) => {
    e.preventDefault();

    const newRecipe = {
      title: itemTitle,
      ingredients: itemIngredients.split(',').map((item) => item.trim()),
      author: itemAuthor,
    };

    try {
      const docId = await addDocument('recipes', newRecipe);
      setItems((prevItems) => [...items, { id: docId, ...newRecipe }]);
      setItemTitle('');
      setItemIngredients('');
      setItemAuthor('');
      setAvailableRecipes((prev) => prev + 1);
    } catch (error) {
      console.error('Not able to add document:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await deleteDocument('recipes', id);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      setAvailableRecipes((prev) => prev - 1);
    } catch (error) {
      console.error('Not able to delete document:', error);
    }
  };

  const editItem = (id) => {
    let itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setEditItemId(id);
      setItemTitle(itemToEdit.title);
      setItemIngredients(itemToEdit.ingredients.join(','));
      setItemAuthor(itemToEdit.author);
    }
  };

  const updateItem = async (e) => {
    e.preventDefault();

    const updatedRecipe = {
      title: itemTitle,
      ingredients: itemIngredients.split(',').map((item) => item.trim()),
      author: itemAuthor,
    };
    try {
      await updateDocument('recipes', editItemId, updatedRecipe);
      const updatedItems = items.map((item) =>
        item.id === editItemId ? { id: editItemId, ...updatedRecipe } : item
      );
      setItems(updatedItems);
      setEditItemId(null);
      setItemTitle('');
      setItemIngredients('');
      setItemAuthor('');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <main className="min-h-screen m-0 flex flex-col items-center justify-between p-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Manage Recipes</h1>
        <h2 className="text-xl font-semibold mb-2">
          Available Recipes: {availableRecipes}
        </h2>
        <RegistrationForm />

        <form
          onSubmit={editItemId !== null ? updateItem : addItem}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-2">Add New Recipe</h2>
          <input
            type="text"
            required
            value={itemTitle}
            placeholder="Recipe Title"
            onChange={(e) => setItemTitle(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-white text-black border border-gray-300 rounded-md"
          />
          <textarea
            value={itemIngredients}
            required
            placeholder="Ingredients(...,...,..)"
            onChange={(e) => setItemIngredients(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-white text-black border border-gray-300 rounded-md"
          ></textarea>
          <input
            type="text"
            required
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
              cardNumber={index + 1}
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
