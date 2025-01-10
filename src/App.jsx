import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

const App = () => {
  return <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>      
    </BrowserRouter>    
  </div>;
};

export default App;
