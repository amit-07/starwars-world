import React from 'react';
import { Route, Outlet} from 'react-router-dom';
import CharacterList from './components/CharacterList/CharacterList';
import SearchBar from './components/SearchBar';
import './App.css';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
