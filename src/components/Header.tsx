import AnimatedButton from "./AnimatedButton";
import Dropdown from "./Dropdown";

type HeaderProps = {
  onHandleScrollToProjects: () => void;
  onHandleScrollToAbout: () => void;
  onHandleScrollToContact: () => void;
}


export default function Header({onHandleScrollToProjects, onHandleScrollToAbout, onHandleScrollToContact} : HeaderProps) {
  return (
    <header className="flex gap-x-[50%] sm:gap-x-[0%] items-center mt-4 sm:mb-10 w-full">
        <h1 className='ml-[3%] sm:ml-[5%] text-white font-bold sm:text-[1.5rem] text-[1rem] whitespace-nowrap'>Belal Ahmady</h1>
        <div className="sm:hidden flex items-center justify-center rounded-2xl">
            <Dropdown
              onHandleScrollToProjects={onHandleScrollToProjects}
              onHandleScrollToAbout={onHandleScrollToAbout}
              onHandleScrollToContact={onHandleScrollToContact}
            />
        </div>
        <div className="hidden sm:flex justify-self-end self-center lg:gap-x-6 ml-auto mr-4 sm:mr-6">
            <AnimatedButton
              onClick={onHandleScrollToProjects} 
              padding="py-[1.5rem] px-[3.5rem]">Projekte</AnimatedButton>
            <AnimatedButton
              onClick={onHandleScrollToAbout} 
              padding="py-[1.5rem] px-[3.5rem]">About</AnimatedButton>
            <AnimatedButton
              onClick={onHandleScrollToContact} 
              padding="py-[1.5rem] px-[3.5rem]">Kontakt</AnimatedButton>
        </div>
    
    </header>
  )
}
