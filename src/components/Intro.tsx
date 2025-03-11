import Anker from "./Anker"

type IntroProps = {
    onHandleScrollToContact: () => void
}
export default function Intro({onHandleScrollToContact}: IntroProps) {
  return (
    <div className="flex flex-col md:flex-row self-center justify-center md:ml-[10%] lg:ml-0 items-center w-full lg:w-[90%] sm:gap-x-8 lg:gap-x-12 gap-y-[2rem] sm:gap-y-0">
        <div className="flex flex-col justify-center justify-self-center self-center sm:ml-8 md:ml-0">
            <div className="flex flex-col justify-center mt-8">
                <h1 className="uppercase text-[1rem] sm:text-[1.5rem] lg:text-[2rem] text-white">Hey, <span className="lowercase">ich bin</span> <br /> Belal Ahmady,</h1>
                <p className="text-white text-[0.9rem] sm:text-[1.5rem] sm:ml-8 ml-2">ein <span className="bg-gradient-to-r from-sky-100 to-cyan-500 bg-clip-text text-transparent font-semibold italic">Full-Stack</span> Entwickler aus Köln.</p>
            </div>
            <div className=" flex sm:gap-x-6  gap-x-2 w-fit justify-center ml-6 sm:ml-12 lg:ml-20 sm:h-[8rem] h-[5rem] items-center">
                <button
                    onClick={onHandleScrollToContact} 
                    className="max-h-[4rem] bg-cyan-400 hover:bg-cyan-200 sm:text-[1.5rem] text-[0.8rem] rounded-full px-3 sm:px-6 py-3 sm:py-6 flex items-center font-semibold">Kontakt
                        <div className="rounded-[100%] bg-black w-2 h-2 justify-self-end ml-4"></div>
                </button>
                <Anker href="https://github.com/bahmady90">
                    <svg className="text-cyan-400 hover:text-cyan-200 cursor-pointer sm:w-12 w-8 h-8 sm:h-12"  viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" stroke="#1f1e1e">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title>github [#060404]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#000000]"> </path> </g> </g> </g> </g>
                    </svg>
                </Anker>
                
                <Anker href="https://www.linkedin.com/in/ahmad-ahmady-13a8ba355/">
                    <svg className="text-cyan-400 hover:text-cyan-200 cursor-pointer sm:w-12 w-8 h-8 sm:h-12"  fill="currentColor"  version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3 c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"/> </g>
                    </svg>
                </Anker>
                
            </div>
        </div>
        <img src="meUpScaled.png" className="rounded-[20%] w-[70%] sm:w-[40%] h-[70%] sm:h-[50%] xl:w-[30%] xl:h-[40%]"></img>

    </div>

  )
}
