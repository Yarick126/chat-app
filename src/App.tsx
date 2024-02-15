import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './data/routes/routes.ts';
import NotFound from './pages/NotFound.tsx';


const App =() => {
  return (
  <BrowserRouter>
    <Routes>
    {ROUTES.map((e)=>(
      <Route path={e.path} element={e.page}/>
    ))}
    <Route path='*' element={NotFound()}/>
    </Routes>
  </BrowserRouter>)
}

export default App;
