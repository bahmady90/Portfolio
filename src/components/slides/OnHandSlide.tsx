import { HiOutlineSparkles, HiOutlineBell, HiOutlineCalendarDays, HiOutlineCamera, HiOutlineMagnifyingGlass, HiOutlineArrowPath, HiOutlineEnvelope, HiOutlineCog6Tooth } from "react-icons/hi2";
import { Carousel } from "../Carousel";
import ProjectDescription from "../ProjectDescription";


const onHandImages = [
  { src: "onhand-1.jpeg", alt: "onhand Image 1" },
  { src: "onhand-2.jpeg", alt: "onhand Image 2" },
  { src: "onhand-3.jpeg", alt: "onhand Image 3" },
];

const onHandFeatures = [
  { icon: HiOutlineSparkles, text: "KI-gestützte Dokumentenverwaltung" },
  { icon: HiOutlineBell, text: "Integriertes Benachrichtigungssystem" },
  { icon: HiOutlineCalendarDays, text: "Smarte Kalenderintegration" },
  { icon: HiOutlineCamera, text: "Nativer Dokumenten-Scanner" },
  { icon: HiOutlineMagnifyingGlass, text: "Smarte Suche" },
  { icon: HiOutlineArrowPath, text: "Synchronisierung zwischen Geräten" },
  { icon: HiOutlineEnvelope, text: "Gmail-Integration" },
  { icon: HiOutlineCog6Tooth, text: "Personalisierbare Einstellungen" },
];

export default function OnHandSlide() {

  return (
    <div className="flex md:flex-row items-center flex-col gap-y-3 sm:gap-y-0 sm:gap-x-[3rem] lg:gap-x-[5rem] xl:gap-x-[8rem]  justify-center" >
      <h1 className="block sm:hidden text-[1.5rem] md:text-[2rem] text-cyan-300 font-medium"  >
            OnHand
      </h1>
      <Carousel images={onHandImages} phone={true}/>
      <ProjectDescription
        title="OnHand native App"
        features={onHandFeatures}
        techStack={["Tailwind", "TypeScript", "React", "NestJS", "Postgres", "TypeORM"]}
        inProgress
        privateRepo
      />

    </div>
  )
}
