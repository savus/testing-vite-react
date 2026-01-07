import { useEffect, useRef, useState } from "react";
import "../../css/user-section.css";
import { useUserContext } from "../Providers/UserInfoProvider";

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
            {dropdownList.map((item) => (
              <div
                className="select-option"
                onClick={() => {
                  setSelectedDropdown(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="filter-dropdown"></div>
      </div>

      <div className="showcase-container">
        <div className="card">
          <h4 className="name">Username: Jimmusen</h4>
          <div className="details" style={{ display: "none" }}>
            <h4 className="first-name">First Name: Jimmy</h4>
            <h6 className="last-name">Last Name: Musen</h6>
          </div>
          <div className="edit-buttons">
            <button className="btn ">Edit Mode</button>
            <button className="btn ">Delete</button>
          </div>
        </div>
        <div className="card">
          <h4 className="name">Username: Jimmusen</h4>
          <div className="details" style={{ display: "none" }}>
            <h4 className="first-name">First Name: Jimmy</h4>
            <h6 className="last-name">Last Name: Musen</h6>
          </div>
          <div className="edit-buttons">
            <button className="btn ">Edit Mode</button>
            <button className="btn ">Delete</button>
          </div>
        </div>
        <div className="card">
          <h4 className="name">Username: Jimmusen</h4>
          <div className="details" style={{ display: "none" }}>
            <h4 className="first-name">First Name: Jimmy</h4>
            <h6 className="last-name">Last Name: Musen</h6>
          </div>
          <div className="edit-buttons">
            <button className="btn ">Edit Mode</button>
            <button className="btn ">Delete</button>
          </div>
        </div>
        <div className="card">
          <h4 className="name">Username: Jimmusen</h4>
          <div className="details" style={{ display: "none" }}>
            <h4 className="first-name">First Name: Jimmy</h4>
            <h6 className="last-name">Last Name: Musen</h6>
          </div>
          <div className="edit-buttons">
            <button className="btn ">Edit Mode</button>
            <button className="btn ">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};
