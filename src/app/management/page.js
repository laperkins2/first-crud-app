'use client';

import React from 'react';
import { useState } from 'react';

export default function ManagementPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen m-0">
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-200 text-slate-800 py-2 px-4"
      >
        Add Recipe
      </button>
    </main>
  );
}
