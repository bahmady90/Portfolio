import { Carousel } from "../Carousel";
import ProjectDescription from "../ProjectDescription";


const myMoodleImages = [
  { src: "moodle-1.png", alt: "moodle Image 1", href: "https://moodle-demo-buob.vercel.app/" },
  { src: "moodle-2.png", alt: "moodle Image 2", href: "https://moodle-demo-buob.vercel.app/" },
  { src: "moodle-3.png", alt: "moodle Image 3", href: "https://moodle-demo-buob.vercel.app/" },
];

export default function KanbanSlide() {

  const myMoodleDescriptionOne = (
    <>
        Komplett responsive Gruppenprojekt mit verschiedenen Fragetypen und KI-Anbindung. Weitere Funktionalitäten wie Google-Auth, Lernstatistiken werden noch implementiert! 
    </>
);

  return (
    <div className="flex md:flex-row items-center flex-col gap-y-3 sm:gap-y-0 sm:gap-x-[3rem] lg:gap-x-[5rem] xl:gap-x-[8rem]  justify-center" >
      <h1 className="block sm:hidden text-[1.5rem] md:text-[2rem] text-cyan-400 font-medium">
            MyMoodle
      </h1>
      <Carousel images={myMoodleImages}/>
      <ProjectDescription
        title="MyMoodle"
        descriptionOne={myMoodleDescriptionOne}
        descriptionTwo="Erstellt mit Tailwind, Typescript, React, Node.js and Python"
        href="https://github.com/bahmady90/moodleDemo" 
      />
      
    </div>
  )
}