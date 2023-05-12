import React from 'react';
import Home from './pages/Home.js';
import './sass/App.scss';
import About from './pages/About.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.js';
import AccommodationSheet from './pages/AccomodationSheet.js';
import Error from './pages/Error.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation/:id" element={<AccommodationSheet />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
