import React, {useReducer } from 'react';
import './App.css';
import { Route, Switch } from 'wouter'
import { Favorites } from './pages/Favorites'
import ListOfGifs from './components/ListOfGifs'
import Home from './pages/Home'
import AppContext from './context/AppContext';
import { uiReducer } from './reducer/uiReducer';
import { initialState } from './initialState';
import { about } from './pages/about';
import { Sidebar } from './components/sidebar';
import Navbar from './components/Navbar';

function App() {

  const [state, dispatch] = useReducer(uiReducer, initialState)
  
  return (
    <div className="App">
      <AppContext.Provider value={{state,dispatch}}>
      {(state.sidebar) && <Sidebar />}
      <Navbar />
        <main>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/gif/:keyword" component={ListOfGifs} />
            <Route path="/fav" component={Favorites} />
            <Route path="/about" component={about}/>
          </Switch>
        </main>
      </AppContext.Provider>
            
    </div>  
  );
}

export default App;
