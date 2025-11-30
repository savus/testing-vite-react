import { useState } from "react";
import "../css/navbar.css";
import { useNavbarStateContext } from "./Providers/NavbarStateProvider";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("none");

  const { dropdownMenu, setDropdownMenu, setVisibleModal } =
    useNavbarStateContext();

  const handleActive = (activeName: string, stateToCompare: string) =>
    activeName === stateToCompare ? "active" : "";

  return (
    <>
      <nav>
        <ul className="ul-defaults-none nav-items" id="nav-react">
          <li
            className={`${handleActive("form", activeLink)}`}
            onClick={() => {
              setVisibleModal("form");
              setActiveLink("form");
            }}
          >
            Form
          </li>
          <div
            data-dropdown
            className={`${handleActive("menus", dropdownMenu)}`}
          >
            <li
              data-dropdown-button=""
              className={`${handleActive("menus", activeLink)}`}
              onClick={() => {
                const toggleDropdown =
                  dropdownMenu === "menus" ? "none" : "menus";
                setVisibleModal("menus");
                setDropdownMenu(toggleDropdown);
                setActiveLink("menus");
              }}
            >
              Menus
            </li>
            <div className="dropdown-menu">
              <div>Content</div>
            </div>
          </div>
          <li
            className={`${handleActive("gallery", activeLink)}`}
            onClick={() => {
              setVisibleModal("gallery");
              setActiveLink("gallery");
            }}
          >
            Gallery
          </li>
        </ul>
      </nav>
    </>
  );
};
