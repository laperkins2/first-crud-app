import React from 'react';
import RecipeCard from '../components/RecipeCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 text-white">
      <h1 className="text-5xl text-center my-1">Four Ingredient Recipes</h1>
      <h2 className="text-2xl text-center">Simple and easy to make!</h2>

      <div>
        <h2 className="my-5">4 Ingredient Recipes</h2>
        <RecipeCard
          cardNumber={1}
          recipeTitle={'Four Ingredient Chocolate Chip Cookies'}
          ingredients={
            '1 cup Creamy Peanut Butter,1 cup Granulated Sugar, 2 Large Egg, 2 cups Semi-Sweet Chocolate Chips'
          }
          author={'Dawn Lopez'}
        />
        <RecipeCard
          cardNumber={2}
          recipeTitle={'Banana Bread'}
          ingredients={
            '2 Large Bananas (really ripe), 0.5 cup Castor Sugar, 1 cup Whole Egg Mayonnaise, 2 cups Self-rising flour'
          }
          author={'Kim McCosker'}
        />
        <RecipeCard
          cardNumber={3}
          recipeTitle={'Sweet Potato Brownies'}
          ingredients={
            '1 cup Sweet Potato (cooked, mashed), 0.5 cup Almond Butter(any nut or seed butter will work), 3tbsp Maple Syrup, 1/4 cup Cocoa Powder '
          }
          author={'Arman Liew'}
        />
      </div>
    </main>
  );
}
