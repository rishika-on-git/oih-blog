import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        {/* Use Navigate for redirect */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
};

export default App;
