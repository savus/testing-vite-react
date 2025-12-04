import type { ReactNode } from "react";
export const PortfolioFilterNav = ({ children }: { children: ReactNode }) => {
  return <ul className="ul-defaults-none portfolio-filter-nav">{children}</ul>;
};
