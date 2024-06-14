'use client';

import React from 'react';
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

    setItems([]);
    setItemTitle('');
    setItemIngredients('');
    setItemAuthor('');
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return <main className="min-h-screen m-0"></main>;
}
