import { ReactNode } from "react";

export default function Step({children, completed}: {completed?: boolean, children?: ReactNode}) {
  return <div className={`step${completed ? ' completed' : ''}`}>
    <div className="step-label">
      {children}
    </div>
  </div>
}