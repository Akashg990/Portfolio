
import './App.css';
import Hero from './Pages/Hero';
import Animation from './Pages/Animation';
import Education from './Pages/Education';
import Navbar from './Navbar';
import {Element} from 'react-scroll';
import Skill from './Pages/Skills';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
function App() {
  return (
    <>
      <Navbar/>
      <Element name="home" >
         <Animation/>
      </Element>
       <Element name="Aboutme">
          <Hero/>
       </Element>
       <Element name="skill">
        <Skill/>
       </Element>
         <Element name="Education">
          <Education/>
         </Element>
      <Element name='Work'>
        <Work/>
      </Element>
      <Element name="Contact">
        <Contact/>
      </Element>
    </>
  );
}

export default App;
