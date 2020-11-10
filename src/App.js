import React from 'react';
import './App.css';
import {Link, Route} from 'wouter'

import ListOfGifs from './components/ListOfGifs'

function App() {

  return (
    <div className="App">
      <main className="App-content">
        <Link to="/gif/morty" >Morty</Link>
        <Link to="/gif/rick">Rick</Link>
        <Route path="/gif/:keyword" component={ListOfGifs}/>
        {/* <ListOfGifs keyword='computer'/> */}
      </main>
    </div>
  );
}

export default App;
