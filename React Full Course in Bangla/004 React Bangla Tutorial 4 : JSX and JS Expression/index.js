import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const todoTitle="Call Us";
const todoDescription="Paragraph on myself";
const date=new Date();
const dateName=date.getDate();
const monthName=date.getMonth();
const currentYear=date.getFullYear();


root.render(
  <div>
    "Hello Welcome to React"
    <h1>Welcome</h1>

    <h3>todoTitle</h3>

    <h3>{todoTitle}</h3>

    <p>
      Paragraph on myself
    </p>
    <p>{todoDescription}</p>

    <p>{dateName + "/" + monthName + "/" + currentYear}</p>

  </div>
);