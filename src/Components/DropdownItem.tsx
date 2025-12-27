export const DropdownItem = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <li
      className="dropdown-item"
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {text}
    </li>
  );
};
