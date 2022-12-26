import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const todoTitle="Call Us";
const todoDescription="Paragraph on myself";
const date=new Date();
const dateName=date.getDate();
const monthName=date.getMonth();
const currentYear=date.getFullYear();

const headingStyle ={
  backgroundColor: "purple",
  color: "white",
  textAlign: "center",
  padding: "15px"
}

root.render(
  <div>

    {
      /*
      CSS Styling through public
      */
    }
    <h1 className="headingStyles largeText">Todo App</h1>

    <h1 className="headingStyles">Todo App</h1>

    {
      /*
      CSS Styling through src
      */
    }

    <h1 className="headingStylesbySRC largeTextbySRC">Todo App</h1>

    <h1 className="headingStylesbySRC">Todo App</h1>

    "Hello Welcome to React"
    <h1 style={headingStyle}>Welcome</h1>

    <h3>todoTitle</h3>

    <h3>{todoTitle}</h3>

    <p>
      Paragraph on myself
    </p>
    <p>{todoDescription}</p>

    <p>{dateName + "/" + monthName + "/" + currentYear}</p>

  </div>
);