
import { forwardRef } from 'react';

const ÜberMich = forwardRef<HTMLDivElement>((props, ref) => {
  console.log(props)
  return (
    <div ref={ref} className="w-full h-fit flex flex-col xl:grid xl:grid-cols-[40%_60%] ml-[5%] xl:ml-0 rounded-2xl self-center justify-self-center p-6 sm:p-8">
      <h2 className=" text-[1.5rem] sm:text-[1.8rem] md:text-[2.5rem] text-sky-100 bg-clip-text text-transparent lg:justify-self-center lg:self-start font-bold">
        Über mich
      </h2>
      <div className="flex flex-col gap-y-5 justify-self-center self-start mt-5">
        <p className="text-white text-[0.7rem] lg:text-[0.9rem] xl:text-[1.1rem]">
          Ich bin ein Anwendungsentwickler mit einem Hochschulabschluss in den Naturwissenschaften.
          Seit geraumer Zeit habe ich meine Leidenschaften für die Erstellung von{' '}
          <span className="bg-gradient-to-r from-sky-100 to-cyan-500 bg-clip-text text-transparent font-semibold italic">
            Full-Stack
          </span>
          -Anwendungen entdeckt.
        </p>
        <p className="text-white text-[0.7rem] lg:text-[0.9rem] xl:text-[1.1rem]">
          Neben der Erstellung von Anwendungen und der Erweiterung meines Tech-Stacks beschäftige ich mich auch mit
          Algorithmen und Datenstrukturen.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-white leading-normal text-[0.8rem] lg:text-[1rem] underline underline-offset-4 decoration-cyan-400 hover:bg-white/[0.06] hover:font-bold hover:tracking-wide cursor-pointer rounded-lg px-3 lg:px-4 py-2 lg:py-3 ml-8 bg-white/[0.03] border border-[#101b38]"
          href="https://leetcode.com/u/BelalAhmady1990/"
        >
          Mein Leetcode-Profil &rarr;
        </a>
      </div>
    </div>
  );
});

export default ÜberMich;

