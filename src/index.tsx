import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import FavoriteList from "./components/FavoritesList/FavoriteList";
import "./App.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <header className="App-header">
        <h1>Star Wars World</h1>
    </header>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/characters" element={<CharacterList />} />
      <Route path="/characters/:characterId" element={<CharacterDetails />} />
      <Route path="/favorites" element={<FavoriteList />} />
    </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
