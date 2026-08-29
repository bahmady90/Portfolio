import { HiOutlineArrowsUpDown, HiOutlineClipboardDocumentList, HiOutlineMoon, HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { Carousel } from "../Carousel";
import ProjectDescription from "../ProjectDescription";


const kabanImages = [
  { src: "kanban-01.png", alt: "Kanban Image 1", href: "https://belal-server.duckdns.org/kanban/" },
  { src: "kanban-02.png", alt: "Kanban Image 2", href: "https://belal-server.duckdns.org/kanban/" },
  { src: "kanban-03.png", alt: "Kanban Image 3", href: "https://belal-server.duckdns.org/kanban/" },
];

const kanbanFeatures = [
  { icon: HiOutlineArrowsUpDown, text: "Drag-and-Drop-Funktionalität" },
  { icon: HiOutlineClipboardDocumentList, text: "Task-Management" },
  { icon: HiOutlineMoon, text: "Dark Mode" },
  { icon: HiOutlineDevicePhoneMobile, text: "Komplett responsives Design" },
];

export default function KanbanSlide() {

  return (
    <div className="flex md:flex-row items-center flex-col gap-y-3 sm:gap-y-0 sm:gap-x-[3rem] lg:gap-x-[5rem] xl:gap-x-[8rem]  justify-center" >
      <h1 className="block sm:hidden text-[1.5rem] md:text-[2rem] text-cyan-400 font-medium">
            Kanban
      </h1>
      <Carousel images={kabanImages} phone={false}/>
      <ProjectDescription
        title="Kanban-Webapp"
        description="Eine Kanban-Board-App zur visuellen Organisation von Aufgaben per Drag-and-Drop."
        features={kanbanFeatures}
        techStack={["Tailwind", "TypeScript", "Angular", "Java", "Spring", "MongoDB"]}
        href="https://github.com/bahmady90/kanban"
      />

    </div>
  )
}
