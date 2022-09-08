import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Works from './Components/Works';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';

import { Route,Routes } from "react-router-dom"
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/works" element={<Works/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
