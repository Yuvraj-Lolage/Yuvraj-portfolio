
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/portfolio_page';
import Navbar from './pages/Navbar/navbar';
import AllProjects from './pages/AllProjects/allProjects';
import ProjectDetails from './pages/ProjectDetails/project_details';
import { useEffect } from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/allprojects' element={<AllProjects />}></Route>
          <Route path='/project/:projectId' element={<ProjectDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
