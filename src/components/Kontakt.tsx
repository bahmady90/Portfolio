import { forwardRef } from "react";

const Kontakt = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div ref={ref} className="flex flex-col self-center justify-self-center w-[90%] justify-center gap-y-4 mb-4 ml-[5%] xl:ml-0">
            <h2 className="text-[1rem] lg:text-[1.5rem] text-white font-bold">Kontaktieren Sie mich!</h2>
            <p className=" text-[0.8rem] sm:text-[1rem] text-stone-300 lg:max-w-[80%]">Ich bin hochmotiviert,  in einem Praktikum bei Ihnen meine Programmierkentnisse einzubringen und praktische Erfahrungen zu sammeln – lassen Sie uns gemeinsam innovative Lösungen schaffen!</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-4 mt-4 lg:mr-4 xl:mr-0">
                <div className="flex w-fit justify-self-center justify-center items-center gap-x-2 mr-4 group hover:bg-gray-900 cursor-pointer rounded-lg px-3 lg:px-4 py-1 lg:py-2 ">
                    <img src="phone.svg" alt="phone" className="w-6 sm:w-7 lg:w-8"/>
                    <p className=" text-[0.5rem] sm:text-[0.6rem] lg:text-[0.8rem] text-white group-hover:font-bold group-hover:tracking-wide">+0049 17684980120</p>
                </div>
                <div className="flex justify-self-center justify-center items-center gap-x-2 mr-8 w-fit group hover:bg-gray-900 cursor-pointer rounded-lg px-3 lg:px-4 py-1 lg:py-2">
                    <img src="whatsapp.svg" alt="whatsapp" className="w-6 sm:w-7 lg:w-8"/>
                    <p className="text-[0.5rem] sm:text-[0.6rem] lg:text-[0.8rem] text-white group-hover:font-bold group-hover:tracking-wide">+0049 15228518210</p>
                </div>
                <div className="flex justify-self-center justify-center items-center gap-x-2 w-fit group hover:bg-gray-900 cursor-pointer rounded-lg px-3 lg:px-4 py-1 lg:py-2">
                    <img src="email.svg" alt="email" className="w-6 sm:w-7 lg:w-8"/>
                    <p className="text-[0.5rem] sm:text-[0.6rem] lg:text-[0.8rem] text-white group-hover:font-bold group-hover:tracking-wide">belal.ahmady@gmx.de</p>
                </div>
                <div className="flex justify-self-center justify-center items-center gap-x-2 w-fit group hover:bg-gray-900 cursor-pointer rounded-lg px-3 lg:px-4 py-1 lg:py-2">
                    <img src="location.svg" alt="location" className="w-6 sm:w-7 lg:w-8"/>
                    <p className="text-[0.5rem] sm:text-[0.6rem] lg:text-[0.8rem] text-white group-hover:font-bold group-hover:tracking-wide">Saalestrasse 1, 50765 Köln</p>
                </div>
            </div>
            {/* <div 
                className={`fancy self-center px-10 lg:px-12 py-5 sm:py-8 w-[8rem] lg:w-[10rem] xl:w-[12rem] h-[3rem] xl:h-[5rem] mt-2 sm:mt-5 lg:mt-8 hover:!bg-white`}
                onClick={() => console.log("object")}
                >
                <button className={`text-[0.7rem] sm:text-[0.9rem] lg:text-[1.1rem] absolute z-10`}>
                Download Vita
                </button>
            </div> */}
        </div>
    )

}) 
  
 
export default Kontakt;