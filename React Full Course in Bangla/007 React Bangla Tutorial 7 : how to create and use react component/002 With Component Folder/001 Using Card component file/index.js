import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <h1 className="headingStyles">Todo App</h1>

    <Card />
    <Card />
    <Card />

  </div>
);