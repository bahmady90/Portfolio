import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";

type DropDownProps  = {
  onHandleScrollToProjects: () => void;
  onHandleScrollToAbout: () => void;
  onHandleScrollToContact: () => void;
}

export default function Dropdown({onHandleScrollToProjects, onHandleScrollToAbout, onHandleScrollToContact}: DropDownProps) {


  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null)

  function handleCLickOutside(e : MouseEvent){
    if(dropDownRef.current && !dropDownRef.current.contains(e.target as Node))
      setIsOpen(false);
  }

  function handleKeyDown(e : KeyboardEvent){
    if(e.key === "Escape"){
      setIsOpen(false);
    }
}

  useEffect(() => {
    document.addEventListener("mousedown", handleCLickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleCLickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])


  return (
    <div className="relative">
        <IoMenu size={20} color="white" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div 
          className="absolute right-1 z-10 w-44 bg-gray-950 divide-y rounded-2xl border-[1px] border-gray-700"
          ref={dropDownRef}>
          <ul className="text-sm text-gray-50 bg-none">
            <li onClick={onHandleScrollToProjects} className="block px-4 py-2 cursor-pointer hover:bg-gray-900 rounded-t-2xl">
              Projekte
            </li>
            <li onClick={onHandleScrollToAbout} className="block px-4 py-2 cursor-pointer hover:bg-gray-900">
              About
            </li>
            <li onClick={onHandleScrollToContact} className="block px-4 py-2 cursor-pointer hover:bg-gray-900 rounded-b-2xl">
              Kontakt
            </li>
          </ul>
        
        </div>
      )}
    </div>
  );
};


