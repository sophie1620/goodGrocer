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
        <div className='wrapper'>
          <h1>Good Grocer</h1>
        </div>
      </header>
      
      <main>
        <div className='wrapper'>

          <GroceryItems />
        </div>

      </main>

      <footer>
        <div className='wrapper'>
          <p className='footerP'>Sophie Lai Creations (2022)</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
