import { ReactNode } from "react";

export default function Stepper({children}: {children: ReactNode}) {
  return <div className="stepper">
    {children}
  </div>
}