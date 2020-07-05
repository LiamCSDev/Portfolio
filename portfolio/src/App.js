import React from 'react';
import './App.css';

import NavBar from './Components/NavBar/NavBar'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'
import Education from './Pages/Education'
import ContactMe from './Pages/ContactMe'
import { useSelector } from "react-redux";

const App = () => {
  const page = useSelector((state) => state.pageInfo.page);
  return (
    <div className="App">
      <NavBar></NavBar>
      Liam Penn Software Developer
      { page === 'Projects' ?
      <Projects/>
      : page === 'Education' ?
      <Education/>
      : page === 'Contact Me' ?
      <ContactMe/>
      : 
      <AboutMe/>
      }
    </div>

  );
}

export default App;
