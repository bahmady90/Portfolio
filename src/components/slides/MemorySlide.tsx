import { Carousel } from "../Carousel"
import ProjectDescription from "../ProjectDescription"

const memoryImages = [
  { src: "memory-1.jpg", alt: "Memory Image 1", href: "https://memorygame-jet-seven.vercel.app/" },
  { src: "memory-2.jpg", alt: "Memory Image 2", href: "https://memorygame-jet-seven.vercel.app/" },
  { src: "memory-3.jpg", alt: "Memory Image 3", href: "https://memorygame-jet-seven.vercel.app/" },
];

export default function MemorySlide() {

  const memoryDescriptionOne = (
    <>
        Komplett responsive Memory-Spiel mit verschiedenen Konfigurations-
        <br />
        möglichkeiten
    </>
);
  return (

    <div className="flex md:flex-row items-center flex-col gap-y-3 sm:gap-y-0 sm:gap-x-[3rem] xl:gap-x-[8rem]  justify-center ">
        <h1 className="block sm:hidden text-[1.5rem] md:text-[2rem] text-cyan-400 font-medium">
            Memory-Spiel
        </h1>
        <Carousel images={memoryImages}/>
        <ProjectDescription
            title="Memory-Spiel"
            descriptionOne={memoryDescriptionOne}
            descriptionTwo="Erstellt mit React, Tailwind und Typescript"
            href="https://github.com/bahmady90/memory"
        />
    </div>
    
    
   

  )
}

