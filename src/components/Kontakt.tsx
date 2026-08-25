"use client";

import { forwardRef, useState } from "react";

type ContactItem = {
  icon: string;
  alt: string;
  label: string;
  copyValue: string;
};

const contactItems: ContactItem[] = [
  { icon: "phone.svg", alt: "phone", label: "+0049 17684980120", copyValue: "+0049 17684980120" },
  { icon: "whatsapp.svg", alt: "whatsapp", label: "+0049 17684980120", copyValue: "+0049 17684980120" },
  { icon: "email.svg", alt: "email", label: "b.ahmady@gmx.de", copyValue: "b.ahmady@gmx.de" },
  { icon: "location.svg", alt: "location", label: "Köln, Deutschland", copyValue: "Köln, Deutschland" },
];

const Kontakt = forwardRef<HTMLDivElement>((props, ref) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  async function handleCopy(value: string, index: number) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error("Kopieren fehlgeschlagen:", err);
    }
  }

  return (
    <div
      ref={ref}
      className="flex flex-col self-center justify-self-center w-[90%] justify-center gap-y-4 mb-4 rounded-2xl  p-6 sm:p-8"
    >
      <h2 className="text-[1rem] lg:text-[1.5rem] text-white font-bold">
        Kontaktieren Sie mich!
      </h2>
      <p className="text-[0.8rem] sm:text-[1rem] text-stone-200 lg:max-w-[80%]">
        Ich bin motiviert, meine Programmierkenntnisse in spannenden Projekten einzubringen und mich stetig weiterzuentwickeln – lassen Sie uns gemeinsam innovative Lösungen schaffen!
      </p>

      <div className="grid grid-cols-2 grid-rows-2 gap-y-4 mt-4 lg:mr-4 xl:mr-0">
        {contactItems.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => handleCopy(item.copyValue, index)}
            className="flex w-fit justify-self-center justify-center items-center gap-x-2 group bg-white/[0.03] hover:bg-white/[0.06] cursor-pointer rounded-lg px-3 lg:px-4 py-1 lg:py-2 transition-colors duration-200 lg:min-w-[13rem] border border-[#101b38]"
          >
            <img
              src={item.icon}
              alt={item.alt}
              className="w-6 sm:w-7 lg:w-8"
            />
            <p className="text-[0.5rem] sm:text-[0.6rem] lg:text-[0.8rem] text-white group-hover:font-bold group-hover:tracking-wide">
              {copiedIndex === index ? "Kopiert!" : item.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
});

Kontakt.displayName = "Kontakt";

export default Kontakt;