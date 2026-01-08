import { useEffect, useRef, useState } from "react";
import "../../css/user-section.css";
import { useUserContext } from "../Providers/UserInfoProvider";
import { UserCard } from "./UserCard";

export const UserSection = ({ dropdownList }: { dropdownList: string[] }) => {
  const { allUsers } = useUserContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(dropdownList[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      if (dropdownRef.current) {
        if (!dropdownRef.current.contains(element)) {
          setDropdownOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);
  return (
    <section
      className="user-section slide active"
      data-animation="slide-in-left"
    >
      <div className="user-format-controls">
        <div className="search-container">
          <input type="text" placeholder="search" className="input" />
        </div>
        <div
          id="test-select"
          className={`${dropdownOpen ? "active" : ""}`}
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
          ref={dropdownRef}
        >
          <i className="fa-solid fa-chevron-down"></i>
          {selectedDropdown}
          <div className={`options-dropdown`}>
            {dropdownList.map((item, index) => (
              <div
                className="select-option"
                onClick={() => {
                  setSelectedDropdown(item);
                }}
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="filter-dropdown"></div>
      </div>

      <div className="showcase-container">
        {allUsers.map((user, index) => {
          const indexPercent = `${(3 + index) / 15}s`;
          return (
            <UserCard userData={user} animDelay={indexPercent} key={user.id} />
          );
        })}
      </div>
    </section>
  );
};
