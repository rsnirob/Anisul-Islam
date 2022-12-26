import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const todoTitle="Call Family";
const todoDescription = "My family is loving and supportive. We enjoy spending time together and always make an effort to stay connected. We have a strong bond and are always there for each other.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(){
    return <div className='card'>
                <h3 className='cardTitle'>{todoTitle}</h3>
                <p className='cardDescription'>{todoDescription}</p>
                <p className='cardFooter'>{dateName + "/" + monthName + "/" + currentYear}</p>
            </div>
}

root.render(
  <div>
    <h1 className="headingStyles">Todo App</h1>

    <Card />
    <Card />
    <Card />

  </div>
);