import { Carousel } from "../Carousel";
import ProjectDescription from "../ProjectDescription";


const kabanImages = [
  { src: "kanban-01.png", alt: "Kanban Image 1", href: "https://kaban-6wxc.vercel.app/" },
  { src: "kanban-02.png", alt: "Kanban Image 2", href: "https://kaban-6wxc.vercel.app/" },
  { src: "kanban-03.png", alt: "Kanban Image 3", href: "https://kaban-6wxc.vercel.app/" },
];

export default function KanbanSlide() {

  const kanbanDescriptionOne = (
    <>
        Komplett responsive Project-Managment-Tool, mit DarkMode und Drag-and-Drop-Funktionalität. 
    </>
);

  return (
    <div className="flex md:flex-row items-center flex-col gap-y-3 sm:gap-y-0 sm:gap-x-[3rem] lg:gap-x-[5rem] xl:gap-x-[8rem]  justify-center" >
      <h1 className="block sm:hidden text-[1.5rem] md:text-[2rem] text-cyan-400 font-medium">
            Kanban
      </h1>
      <Carousel images={kabanImages}/>
      <ProjectDescription
        title="Kanban-Webapp"
        descriptionOne={kanbanDescriptionOne}
        descriptionTwo="Erstellt mit Tailwind, Typescript, React, Node.js and Mongoose"
        href="https://github.com/bahmady90/kanban" 
      />
      
    </div>
  )
}
