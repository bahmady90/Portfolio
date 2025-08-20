import { Carousel } from "../Carousel";
import ProjectDescription from "../ProjectDescription";

const myMoodleImages = [
  {
    src: "schach-1.png",
    alt: "chessImage 1",
    href: "https://schach-7sw3.vercel.app/",
  },
  {
    src: "schach-2.png",
    alt: "chessImage 2",
    href: "https://schach-7sw3.vercel.app/",
  },
  {
    src: "schach-3.png",
    alt: "chessImage 3",
    href: "https://schach-7sw3.vercel.app/",
  },
];

export default function ChessSlide() {
  const chessDescription = (
    <>
      Komplett responsive Gruppenprojekt mit integrierter Schachki und modernem
      Layout.
    </>
  );

  return (
    <div className="flex md:flex-row items-center flex-col gap-y-3 sm:gap-y-0 sm:gap-x-[3rem] lg:gap-x-[5rem] xl:gap-x-[8rem]  justify-center">
      <h1 className="block sm:hidden text-[1.5rem] md:text-[2rem] text-cyan-400 font-medium">
        Schach mit Bot
      </h1>
      <Carousel images={myMoodleImages} />
      <ProjectDescription
        title="Chessgame with bot"
        descriptionOne={chessDescription}
        descriptionTwo="Erstellt mit Tailwind, Typescript, React"
        href="https://github.com/bahmady90/chess"
      />
    </div>
  );
}
