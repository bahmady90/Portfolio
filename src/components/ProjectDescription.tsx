import { ReactNode } from "react";
import { IconType } from "react-icons";
import { HiOutlineWrenchScrewdriver, HiOutlineLockClosed } from "react-icons/hi2";

type Feature = {
  icon: IconType;
  text: ReactNode;
};

type ProjectDescriptionProps = {
  title: string;
  features: Feature[];
  techStack: string[];
  href?: string;
  inProgress?: boolean;
  privateRepo?: boolean;
};

export default function ProjectDescription({
  title,
  features,
  techStack,
  href,
  inProgress,
  privateRepo,
}: ProjectDescriptionProps) {
  return (
    <div className="hidden sm:flex flex-col md:my-6 w-full md:w-[26rem] lg:w-[30rem] xl:w-[34rem] self-center bg-white/[0.03] rounded-2xl px-8 py-8 lg:px-10 lg:py-10 shadow-sm shadow-blue-950 transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:shadow-black/40">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-[1.5rem] lg:text-[2rem] text-cyan-300 font-bold leading-tight" >
          {title}
        </span>
        {inProgress && (
          <span className="flex items-center gap-1.5 text-teal-400 text-[0.7rem] font-medium tracking-wide uppercase bg-teal-400/10 border border-teal-400/30 rounded-full px-3 py-1">
            <HiOutlineWrenchScrewdriver size={14} />
            In der Testphase
          </span>
        )}
      </div>

      <div className="border-b border-slate-700/60 mt-4 mb-6" />

      <div className="grid grid-cols-2 gap-x-6 gap-y-6">
        {features.map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-start gap-3">
            <Icon className="text-cyan-400 shrink-0 mt-1" size={22} />
            <span className="text-white text-[0.95rem] leading-snug">{text}</span>
          </div>
        ))}
      </div>

      <div className="border-b border-slate-700/60 mt-6 mb-4" />

      <span className="text-[0.7rem] tracking-widest text-slate-500 font-medium mb-1">
        TECH-STACK
      </span>
      <span className="text-slate-300 text-[0.9rem]">
        {techStack.join(" · ")}
      </span>

      {href && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="self-start mt-4 text-white leading-normal text-[0.9rem] underline underline-offset-4 decoration-cyan-400 hover:bg-gray-900 hover:font-bold hover:tracking-wide cursor-pointer rounded-lg px-3 lg:px-4 py-1 lg:py-2"
          href={href}
        >
          <span>Hier zur Github-Repo &rarr;</span>
        </a>
      )}

      {!href && privateRepo && (
        <span className="flex items-center gap-2 self-start mt-4 text-slate-400 leading-normal text-[0.9rem] rounded-lg px-3 lg:px-4 py-1 lg:py-2">
          <HiOutlineLockClosed size={16} className="shrink-0" />
          Privates GitLab-Repository
        </span>
      )}
    </div>
  );
}
