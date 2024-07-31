import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {  faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Home from './components/Home'
import NavBar from './components/NavBar'
import { useRef } from 'react';
library.add(fas, faFontAwesome, faTwitter)

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <div className="bg-[#FDFAF6] text-lg dark:bg-[#0A192F] min-h-screen min-w-full text-[#0A192F] dark:text-[#CCD6F6]">
      <NavBar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} />
      <Home  homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef}/>
    </div>
  );
}

export default App;
