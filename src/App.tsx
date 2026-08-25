import { useRef, useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Techstack from "./components/Techstack";
import "./index.css";
import Projects from "./components/Projects";
import ProjectsIntro from "./components/ProjectsIntro";
import ÜberMich from "./components/ÜberMich";
import Kontakt from "./components/Kontakt";

function App() {
  const [stackSelected, setStackSelected] = useState("frontend");

  const projects = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  function handleSetStackSelected(stack: string) {
    setStackSelected(stack);
    console.log(stackSelected);
  }

  function scrollToProjects() {
    if (projects.current) {
      projects.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function scrollToAbout() {
    if (about.current) {
      about.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }

  function scrollToContact() {
    if (contact.current) {
      contact.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end",
      });
    }
  }

  return (
    <ThemeProvider>
      <Header
        onHandleScrollToProjects={scrollToProjects}
        onHandleScrollToAbout={scrollToAbout}
        onHandleScrollToContact={scrollToContact}
      />
      <main className="h-fit max-w-full justify-self-center flex flex-col gap-y-8">
        <Intro onHandleScrollToContact={scrollToContact} />
        <Techstack/>
        <ProjectsIntro />
        <Projects ref={projects} />
        <div className="relative h-fit grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 w-full sm:w-screen gap-y-6 sm:gap-y-0 py-8">
          <div
            className="absolute -top-px left-1/2 h-0.5 w-[90%] -translate-x-1/2 rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, #22d3ee, transparent)",
              boxShadow: "0 0 10px rgba(34,211,238,0.5)",
            }}
          />
            <ÜberMich ref={about} />
            <Kontakt ref={contact} />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
