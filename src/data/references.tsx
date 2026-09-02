import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  HiOutlineSquares2X2,
  HiOutlineDevicePhoneMobile,
  HiOutlineCube,
  HiOutlineBolt,
  HiOutlineTableCells,
  HiOutlineCircleStack,
  HiOutlineArrowsRightLeft,
  HiOutlineUserGroup,
  HiOutlineClipboardDocumentCheck,
  HiOutlinePuzzlePiece,
  HiOutlinePencilSquare,
  HiOutlineBeaker,
  HiOutlineDocumentText,
} from "react-icons/hi2";

export type ReferenceItem = { icon: IconType; text: ReactNode };

export type ReferenceProject = {
  title: string;
  problem: string;
  contributions: ReferenceItem[];
  outcome?: string;
  achievement?: string;
};

export type Reference = {
  company: string;
  companyUrl?: string;
  kind: string; // z. B. "Vertiefungspraktikum"
  platform?: string; // z. B. "Proleague-Plattform"
  period: string; // Zeitraum aus dem Lebenslauf ersetzen
  tasks: ReferenceItem[];
  techStack: string[];
  project: ReferenceProject;
  // Empfehlung/Zitat vom Vorgesetzten (optional). quoteAuthor = Name + Position.
  quote?: string;
  quoteAuthor?: string;
};

const linkClass =
  "text-cyan-400 underline decoration-cyan-400/40 underline-offset-2 transition-colors hover:text-cyan-300 hover:decoration-cyan-400";

export const references: Reference[] = [
  {
    company: "Volta Digitale GmbH",
    companyUrl: "https://voltadigitale.de/",
    kind: "Vertiefungspraktikum",
    platform: "Proleague-Plattform",
    period: "10/2025 – 07/2026",
    tasks: [
      { icon: HiOutlineSquares2X2, text: "Responsive UI-Komponenten entwickelt und angepasst" },
      { icon: HiOutlineDevicePhoneMobile, text: "Cross-Device-Layouts umgesetzt" },
      { icon: HiOutlineCube, text: "NestJS-Module erstellt und erweitert" },
      { icon: HiOutlineBolt, text: "Serverseitige Interaktionen mit HTMX" },
      { icon: HiOutlineTableCells, text: "Datenbankschema mit TypeORM modelliert" },
      { icon: HiOutlineCircleStack, text: "PostgreSQL-Datenbank betreut" },
      { icon: HiOutlineArrowsRightLeft, text: "Migrationen geplant und geschrieben" },
      { icon: HiOutlineUserGroup, text: "Im agilen Team mitgearbeitet" },
      { icon: HiOutlineClipboardDocumentCheck, text: "Jira-Tickets bearbeitet" },
    ],
    techStack: ["HTMX", "NestJS", "TypeScript", "TypeORM", "PostgreSQL"],
    project: {
      title: "Erweiterung des Dashboards der Proleague-Plattform",
      problem: "Benutzer konnten das Dashboard nicht konfigurieren.",
      contributions: [
        { icon: HiOutlineTableCells, text: "Konzeption des Datenmodells" },
        { icon: HiOutlineCircleStack, text: "Entitäten und Beziehungen mit TypeORM umgesetzt" },
        {
          icon: HiOutlinePencilSquare,
          text: "Formulare zur Kachel-Erstellung inkl. Validierung geschrieben",
        },
        {
          icon: HiOutlinePuzzlePiece,
          text: (
            <>
              Kachelstrukturen über das{" "}
              <a
                href="https://docs.nestjs.com/fundamentals/dynamic-modules#community-guidelines"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                forRoot-/forFeature-Pattern
              </a>{" "}
              erweitert
            </>
          ),
        },
        { icon: HiOutlineBeaker, text: "Tests zur Qualitätssicherung" },
        { icon: HiOutlineDocumentText, text: "Projektdokumentation" },
      ],
      outcome: "Erfolgreich umgesetzt und abgenommen.",
    },
    quote:
      "Belal Ahmady ist ein verlässlicher Junior Softwareentwickler mit gutem analytischem Verständnis, hoher Eigenmotivation sowie Verständnis für wirtschaftliches Handeln.",
    quoteAuthor: "Ruben Peter, Geschäftsführer Volta Digitale GmbH",
  },
];
