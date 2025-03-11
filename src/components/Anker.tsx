import { ReactNode } from "react";

type AnkerProps = {
    href: string;
    children: ReactNode
}

export default function Anker({href, children}: AnkerProps) {
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
