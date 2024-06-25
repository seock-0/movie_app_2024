import React from 'react';
import './App.js';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home.js';
import Navigation from './components/Navigation.js';
import Detail from './routes/Detail.js';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About}/>
        <Route path='/movie-detail' Component={Detail} />
      </Routes>
    </HashRouter>
  )
}

export default App;