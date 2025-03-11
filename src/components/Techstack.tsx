import AnimatedButton from "./AnimatedButton"

type TechStackProps = {
  stackSelected: string,
  handleSetStackSelected: (stack: string) => void
}

export default function Techstack({stackSelected, handleSetStackSelected}: TechStackProps) {
  return (
    <>
    <div className="flex w-fit self-center mt-8 sm:mt-12 lg:mt-16 xl:mt-20 gap-x-12 grid-cols-2  mb-[2rem] lg:mb-[5rem]" >
      <AnimatedButton
        padding="py-5 sm:py-7 px-[3rem] sm:px-[4rem]" 
        layoutProp="frontend" 
        stackSelected={stackSelected} 
        onClick={() => handleSetStackSelected("frontend")}>Frontend</AnimatedButton>
      <AnimatedButton
        padding="py-5 sm:py-7 px-[3rem] sm:px-[4rem]" 
        layoutProp="backend" 
        stackSelected={stackSelected} 
        onClick={() => handleSetStackSelected("backend")}>Backend</AnimatedButton>
    </div>
      <div className="relative w-[85%] sm:w-[70%] h-fit grid self-center justify-self-center transform transition-all duration-500 ease-in-out mb-[3rem] sm:mb-[5rem] lg:mb-[8rem]">
          <div
            className={`absolute inset-0 grid grid-cols-5 gap-x-8 sm:gap-x-0 transition-opacity transform duration-500 ease-in-out ${
              stackSelected === "frontend" ? "opacity-100 " : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Frontend Images */}
            <img src="css.svg" alt="css-logo" className="w-12 sm:w-h-[4rem] h-12 sm:h-[4rem]" />
            <img src="html.svg" alt="html-logo" className="w-12 sm:w-h-[4rem] h-12 sm:h-[4rem]"/>
            <img src="tailwind.svg" alt="tailwind-logo" className="w-12 sm:w-h-[4rem] h-12 sm:h-[4rem]"/>
            <img src="react.svg" alt="react-logo" className="w-12 sm:w-h-[4rem] h-12 sm:h-[4rem]"/>
            <img src="typescript.svg" alt="typescript-logo" className="w-12 sm:w-h-[4rem] h-12 sm:h-[4rem]"/>
          </div>

          <div
            className={`absolute inset-0 grid grid-cols-5 gap-x-8 sm:gap-x-0 transition-opacity transform duration-500 ease-in-out ${
              stackSelected === "backend" ? "opacity-100 " : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Backend Images */}
            <img src="node.svg" alt="node-logo" className="w-12 sm:w-h-[4rem] h-12 sm:h-[4rem]"/>
            <img src="express.svg" alt="express-logo" className="w-12 sm:w-h-[4rem] h-12 sm:h-[4rem]" />
            <img src="dotnet.svg" alt="dotnet-logo" className="w-12 sm:w-h-[4rem] h-12 sm:h-[4rem]"/>
            <img src="mongo.svg" alt="mongo-logo" className="w-12 sm:w-h-[4rem] h-12 sm:h-[4rem]"/>
            <img src="postsql.svg" alt="postgresql-logo" className="w-12 sm:w-h-[4rem] h-12 sm:h-[4rem]"/>
          </div>
      </div>
    
    </>
  )
}
