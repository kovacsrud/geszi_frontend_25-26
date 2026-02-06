import type { ReactNode } from "react";

type SectionProps={
    title?:string,
    children:ReactNode
}

function Section({title,children}:SectionProps) {
  return (
    <div>
        <h1 className="text-2xl text-center text-sky-700">{title}</h1>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Section