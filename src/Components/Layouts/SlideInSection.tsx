import type { ReactNode } from "react";
import "../../css/slide-in-section.css";
export const SlideInSection = ({ children }: { children: ReactNode }) => {
  return <section className="slide-in-section container">{children}</section>;
};
