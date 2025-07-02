import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects/>
      <Resume />
      <Contact/>
      <Footer/>
    </>
  )
}
