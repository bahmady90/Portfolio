import { forwardRef } from "react";

import KanbanSlide from "./slides/KanbanSlide";
import ChessSlide from "./slides/ChessSlide";
import OnHandSlide from "./slides/OnHandSlide";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  console.log(props);
  return (
    <div
      ref={ref}
      className="h-fit w-full self-center flex justify-center items-center"
    >
      <div className="flex flex-col gap-y-[2rem] sm:gap-y-[3rem] lg::gap-y-[5rem]">
        <OnHandSlide/>
        <KanbanSlide />
        <ChessSlide />

      </div>
    </div>
  );
});

export default Projects;
