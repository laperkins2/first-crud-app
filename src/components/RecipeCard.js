import React from 'react';

export default function RecipeCard({
  cardNumber,
  recipeTitle,
  ingredients,
  author,
  onDelete,
  onEdit,
}) {
  return (
    <div className="w-100 p-4 m-4 card border-4 rounded-2xl overflow-hidden shadow-lg bg-yellow-200">
      Card Number: {cardNumber}
      <br></br>
      Recipe Title: {recipeTitle}
      <br></br>
      Ingredients: {ingredients}
      <br></br>
      Author: {author}
      <br></br>
      <div className="flex justify-end mt-2">
        <button
          onClick={onEdit}
          className="px-3 py-1 mt-2 bg-blue-500 text-white rounded-md"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1 mt-2 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
