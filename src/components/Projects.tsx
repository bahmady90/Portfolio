import { forwardRef } from 'react';
import KanbanSlide from './slides/KanbanSlide';
import MemorySlide from './slides/MemorySlide';
import MyMoodleSlide from './slides/MyMoodleSlide';

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="h-fit w-full self-center flex justify-center items-center">
      <div className="flex flex-col gap-y-[2rem] sm:gap-y-[3rem] lg::gap-y-[5rem]">
        <MemorySlide />
        <KanbanSlide />
        <MyMoodleSlide/>

      </div>
    </div>
  );
});

export default Projects;

