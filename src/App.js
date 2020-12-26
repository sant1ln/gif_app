import React from 'react';
import './App.css';
import { Route } from 'wouter' 
import Favorites from './pages/Favorites'
import ListOfGifs from './components/ListOfGifs'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <main>
        <Route path="/" component={Home} />
        <Route path="/gif/:keyword" component={ListOfGifs} />
        <Route path="/fav" component={Favorites} />
      </main>
    </div>
  );
}

export default App;
