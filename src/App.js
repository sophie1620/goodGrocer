import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.scss';
import Nav from './components/Nav';
import GroceryItems from './components/GroceryItems';

function App() {
  return (
    <div className="App">
      <Nav />

      <header>
        <h1>Good Grocer</h1>
      </header>
      
      <main>
        <GroceryItems />

      </main>

      <footer>
        <p>Sophie Lai Creations (2022)</p>
      </footer>
    </div>
  );
}

export default App;
