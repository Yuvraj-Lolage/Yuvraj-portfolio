
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/portfolio_page';
import Navbar from './pages/Navbar/navbar';
import AllProjects from './pages/AllProjects/allProjects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element = { <Homepage/> }></Route>
        <Route path='/allprojects' element = { <AllProjects/> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
