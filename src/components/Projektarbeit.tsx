import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineTrophy,
  HiOutlineCheckCircle,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";
import { references } from "../data/references";

const label = "text-[0.62rem] sm:text-[0.7rem] tracking-widest text-slate-500 font-medium";
const body = "text-[0.78rem] sm:text-[0.9rem] leading-snug";
const pad = "px-4 sm:px-8 lg:px-10";

const Projektarbeit = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="h-fit w-full self-center flex flex-col items-center gap-y-10"
    >
      {references.map((r) => (
        <motion.div
          key={r.company}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-[92%] max-w-5xl overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] shadow-sm shadow-blue-950"
        >
          {/* Kopf – gilt für beide Spalten */}
          <div className={`${pad} pt-4 sm:pt-8 lg:pt-10`}>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {r.companyUrl ? (
                <a
                  href={r.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[1.1rem] sm:text-[1.4rem] lg:text-[1.9rem] text-cyan-300 font-bold leading-tight decoration-cyan-300/40 underline-offset-4 hover:underline"
                >
                  {r.company}
                  <HiOutlineArrowTopRightOnSquare
                    className="shrink-0 opacity-50 transition-opacity group-hover:opacity-90"
                    size={16}
                  />
                </a>
              ) : (
                <span className="text-[1.1rem] sm:text-[1.4rem] lg:text-[1.9rem] text-cyan-300 font-bold leading-tight">
                  {r.company}
                </span>
              )}
              <span className="flex items-center gap-1 sm:gap-1.5 text-teal-400 text-[0.6rem] sm:text-[0.7rem] font-medium tracking-wide uppercase bg-teal-400/10 border border-teal-400/30 rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1">
                <HiOutlineAcademicCap size={12} />
                {r.kind}
              </span>
            </div>
            <span className="mt-1 block text-slate-400 text-[0.7rem] sm:text-[0.85rem]">
              {[r.platform, r.period].filter(Boolean).join(" · ")}
            </span>
          </div>

          {/* Zwei Spalten */}
          <div className={`${pad} grid gap-x-10 gap-y-5 sm:gap-y-8 py-4 sm:py-8 md:grid-cols-2`}>
            {/* Tätigkeiten */}
            <div className="flex flex-col md:border-r md:border-slate-700/40 md:pr-10">
              <span className={label}>TÄTIGKEITEN</span>
              <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-3 sm:gap-y-5">
                {r.tasks.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <Icon className="text-cyan-400 shrink-0 mt-0.5 sm:mt-1" size={16} />
                    <span className={`text-white ${body}`}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projekt */}
            <div className="flex flex-col">
              <span className={label}>PROJEKT</span>
              <span className="mt-1 text-[0.9rem] sm:text-[1.05rem] lg:text-[1.25rem] text-cyan-300 font-semibold leading-tight">
                {r.project.title}
              </span>

              <p className="mt-3 sm:mt-4 text-slate-500 text-[0.7rem] sm:text-[0.8rem]">
                Ausgangslage
              </p>
              <p className={`mt-0.5 text-slate-300 ${body}`}>{r.project.problem}</p>

              <div className="mt-3 sm:mt-5 flex flex-col gap-2.5 sm:gap-4">
                {r.project.contributions.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <Icon className="text-cyan-400 shrink-0 mt-0.5 sm:mt-1" size={16} />
                    <span className={`text-white ${body}`}>{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-auto flex flex-col gap-2 sm:gap-3 pt-4 sm:pt-6">
                {r.project.achievement && (
                  <div className="flex items-center gap-2 rounded-lg border border-teal-400/30 bg-teal-400/10 px-2.5 sm:px-3 py-1.5 sm:py-2 text-teal-300 text-[0.75rem] sm:text-[0.85rem] font-medium">
                    <HiOutlineTrophy size={15} className="shrink-0" />
                    {r.project.achievement}
                  </div>
                )}
                {r.project.outcome && (
                  <div className="flex items-center gap-2 text-teal-300 text-[0.75rem] sm:text-[0.85rem] font-medium">
                    <HiOutlineCheckCircle size={15} className="shrink-0" />
                    {r.project.outcome}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Verbundener Fußbereich – Tech-Stack + Empfehlung */}
          <div
            className={`${pad} flex flex-col gap-4 sm:gap-6 border-t border-slate-700/50 bg-black/20 py-4 sm:py-8`}
          >
            <div>
              <span className={label}>TECH-STACK</span>
              <p className="mt-1 text-slate-300 text-[0.78rem] sm:text-[0.9rem]">
                {r.techStack.join(" · ")}
              </p>
            </div>

            {r.quote && (
              <figure className="border-l-2 border-cyan-400/50 pl-3 sm:pl-5">
                <blockquote
                  style={{ fontFamily: "'Spectral', serif" }}
                  className="text-slate-100 text-[0.85rem] sm:text-[1.1rem] lg:text-[1.2rem] italic leading-relaxed"
                >
                  {r.quote}
                </blockquote>
                {r.quoteAuthor && (
                  <figcaption className="mt-2 text-slate-400 text-[0.72rem] sm:text-[0.85rem]">
                    &ndash; {r.quoteAuthor}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
});

export default Projektarbeit;
