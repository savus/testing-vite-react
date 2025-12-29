import type { TFilterLink } from "../../types";

export const FilterLink = ({
  text,
  activeLinkName,
  activeFilterLink,
  onClick,
}: {
  text: string;
  activeLinkName: TFilterLink;
  activeFilterLink: TFilterLink;
  onClick?: () => void;
}) => {
  const isLinkActive = () =>
    activeLinkName === activeFilterLink ? "active" : "";

  return (
    <li
      className={`filter-link ${isLinkActive()}`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {text}
    </li>
  );
};
