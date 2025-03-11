import { useRef, useState } from 'react';
import { ThemeProvider } from "@material-tailwind/react";

import Header from './components/Header'
import Intro from './components/Intro'
import Techstack from './components/Techstack'
import './index.css'
import Projects from './components/Projects';
import ProjectsIntro from './components/ProjectsIntro';
import ÜberMich from "./components/ÜberMich";
import Kontakt from "./components/Kontakt"






function App() {

 

  const [stackSelected, setStackSelected] = useState("frontend");

  const projects = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);
  
  function handleSetStackSelected(stack : string) {
    setStackSelected(stack);
    console.log(stackSelected);
  }

  function scrollToProjects()  {
      if(projects.current){
        projects.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    function scrollToAbout() {
      if (about.current) {
        about.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }
    
    function scrollToContact() {
      if (contact.current) {
        contact.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
      }
    }

  

  return (
    <ThemeProvider>
      <Header
        onHandleScrollToProjects={scrollToProjects}
        onHandleScrollToAbout={scrollToAbout}
        onHandleScrollToContact={scrollToContact}
      />
      <main className='h-fit max-w-full justify-self-center flex flex-col gap-y-8'>
        <Intro onHandleScrollToContact={scrollToContact}/>
        <Techstack stackSelected={stackSelected} handleSetStackSelected={handleSetStackSelected}/>
        <ProjectsIntro/>
        <Projects ref={projects}/>
        <div className="h-fit grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 w-full sm:w-screen border-t-[3px] gap-y-6 sm:gap-y-0  border-stone-600 py-8">
            <ÜberMich ref={about}/>
            <Kontakt ref={contact}/>   
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App


//EInrückung bei AUflistung Projekte. Hier zur Github-Repo; Kontaktiere mich Bilder sind nicht symmetrisch / Abstände. Vielleicht mir Grautönen statt schwarz weiß. Alles ein bisschen kleiner 