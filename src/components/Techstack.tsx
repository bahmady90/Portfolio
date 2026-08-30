"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJava, FaTasks, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiTypeorm,
  SiJest,
  SiGithubactions,
  SiHtmx,
  SiAngular,
  SiDotnet,
  SiJira,
  SiSpring,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type Tech = {
  name: string;
  icon: React.ReactNode;
  color: string;
  basics?: boolean;
};

type Category = {
  title: string;
  items: Tech[];
};

const categories: Category[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "HTMX", icon: <SiHtmx />, color: "#3D72D7" },
      { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#8CC84B" },
      { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
      { name: "Java", icon: <FaJava />, color: "#EA2D2E" },
      { name: "Spring", icon: <SiSpring />, color: "#6DB33F" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "TypeORM", icon: <SiTypeorm />, color: "#FE0803" },
    ],
  },
  {
    title: "Weitere Sprachen",
    items: [
      { name: "Python", icon: <FaPython />, color: "#3776AB", basics: true },
      { name: "C# / .NET", icon: <SiDotnet />, color: "#512BD4", basics: true },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", icon: <FaDocker />, color: "#2496ED", basics: true },
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF", basics: true },
    ],
  },
  {
    title: "Testing",
    items: [{ name: "Jest", icon: <SiJest />, color: "#C21325" }],
  },
  {
    title: "Projektmanagement",
    items: [
      { name: "Jira", icon: <SiJira />, color: "#0052CC" },
      { name: "Scrum", icon: <FaTasks />, color: "#22c55e" },
    ],
  },
];

const categoryContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.15 } },
};

const categoryItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

const chipContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const chipItem: Variants = {
  hidden: { opacity: 0, scale: 0.85, x: -6 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div
      ref={ref}
      className="mx-auto max-w-xl px-4 py-10 sm:max-w-2xl sm:px-8 sm:py-14 lg:max-w-5xl lg:py-20"
    >
      <h2
        className="mb-6 text-[1.5rem] sm:text-[1.8rem] md:text-[2.5rem] text-sky-100 bg-clip-text text-transparent font-bold sm:mb-10 lg:mb-14"
        style={{ fontFamily: "'Spectral', serif" }}
      >
        Tech-Stack
      </h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={categoryContainer}
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className="flex gap-4 sm:gap-6 lg:gap-8"
            variants={categoryItem}
          >
            {/* Rail: line segments + dot, self-centering via flex */}
            <div className="flex w-4 shrink-0 flex-col items-center sm:w-5 lg:w-6">
              <div
                className={`w-0.5 flex-1 lg:w-1 ${index === 0 ? "invisible" : ""}`}
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(34,211,238,0.15), #22d3ee)",
                }}
              />
              <motion.div
                className="h-3.5 w-3.5 shrink-0 rounded-full sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                style={{
                  backgroundColor: "#22d3ee",
                  boxShadow: "0 0 10px rgba(34,211,238,0.6)",
                }}
                variants={dotVariants}
              />
              <div
                className={`w-0.5 flex-1 lg:w-1 ${
                  index === categories.length - 1 ? "invisible" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(to bottom, #22d3ee, rgba(34,211,238,0.15))",
                }}
              />
            </div>

            {/* Content */}
            <div
              className={
                index === categories.length - 1
                  ? "pb-2"
                  : "pb-8 sm:pb-10 lg:pb-14"
              }
            >
              <p className="mb-3 text-xs font-semibold tracking-wider text-cyan-400 uppercase sm:mb-4 sm:text-base lg:mb-5 lg:text-lg">
                {category.title}
              </p>

              <motion.div
                className="flex flex-wrap gap-2 sm:gap-4 lg:gap-5"
                variants={chipContainer}
              >
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={chipItem}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 transition-colors duration-200 hover:bg-white/[0.07] sm:gap-3 sm:px-5 sm:py-3 lg:px-5 lg:py-2.5"
                  >
                    <span
                      className="text-base sm:text-2xl lg:text-2xl"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </span>
                    <span
                      className={`text-xs sm:text-base lg:text-base ${
                        tech.basics ? "text-stone-400" : "text-stone-200"
                      }`}
                    >
                      {tech.name}
                    </span>
                    {tech.basics && (
                      <span className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[8px] text-stone-500 sm:px-2 sm:text-xs lg:text-xs">
                        Basics
                      </span>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
