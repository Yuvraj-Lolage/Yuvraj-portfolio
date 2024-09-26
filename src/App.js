
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/portfolio_page';
import Navbar from './pages/Navbar/navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element = { <Homepage/> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
