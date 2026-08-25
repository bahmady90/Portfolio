import { ReactNode } from "react";

type AnkerProps = {
    href?: string;
    children: ReactNode
}

export default function Anker({href, children}: AnkerProps) {
  if (!href) {
    return (
      <div className="cursor-not-allowed">
        {children}
      </div>
    );
  }

  return (
    <a
      className=""
      href={href}
      target="_blank"
      rel="noopener noreferrer"
        >
        {children}
    </a>
  )
}
