import { forwardRef } from "react";

import KanbanSlide from "./slides/KanbanSlide";
import MemorySlide from "./slides/MemorySlide";
import ChessSlide from "./slides/ChessSlide";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  console.log(props);
  return (
    <div
      ref={ref}
      className="h-fit w-full self-center flex justify-center items-center"
    >
      <div className="flex flex-col gap-y-[2rem] sm:gap-y-[3rem] lg::gap-y-[5rem]">
        <KanbanSlide />
        <ChessSlide />
        <MemorySlide />
      </div>
    </div>
  );
});

export default Projects;
