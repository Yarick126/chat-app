import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './data/routes/routes';
import NotFound from './pages/NotFound';


const App =() => {
  return (
  <BrowserRouter>
    <Routes>
    {ROUTES.map((e)=>(
      <Route path={e.path} element={e.page} key={e.path}/>
    ))}
    <Route path='*' element={NotFound()}/>
    </Routes>
  </BrowserRouter>)
}

export default App;
