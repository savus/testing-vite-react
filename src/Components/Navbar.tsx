import { act, Component } from "react";
import "../css/navbar.css";
import type { TDropdownMenu, TVisibleModal } from "../types";

type State = {
  activeLink: "form" | "menus" | "gallery" | "none";
};

export class Navbar extends Component<{
  setVisibleModal: (modal: TVisibleModal) => void;
  dropdownMenu: TDropdownMenu;
  setDropdownMenu: (menu: TDropdownMenu) => void;
}> {
  state: State = {
    activeLink: "none",
  };

  render() {
    const { setVisibleModal, dropdownMenu, setDropdownMenu } = this.props;
    const { activeLink } = this.state;

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
                this.setState({ activeLink: "form" });
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
                  this.setState({
                    activeLink: "menus",
                  });
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
                this.setState({ activeLink: "gallery" });
              }}
            >
              Gallery
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
