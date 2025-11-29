import { act, Component } from "react";
import "../css/navbar.css";
import type { TDropdownMenu, TVisibleModal } from "../types";

type State = {
  activeLink: "form" | "menus" | "gallery" | "none";
  activeDropdown: TDropdownMenu;
};

export class Navbar extends Component<{
  setVisibleModal: (modal: TVisibleModal) => void;
  setDropdownMenu: (menu: TDropdownMenu) => void;
}> {
  state: State = {
    activeLink: "none",
    activeDropdown: "none",
  };

  render() {
    const { setVisibleModal, setDropdownMenu } = this.props;
    const { activeLink, activeDropdown } = this.state;

    const handleActive = (activeName: string, stateName: string) =>
      activeName === stateName ? "active" : "";

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
              className={`${handleActive("menus", activeDropdown)}`}
            >
              <li
                data-dropdown-button=""
                className={`${handleActive("menus", activeLink)}`}
                onClick={() => {
                  setVisibleModal("menus");
                  setDropdownMenu("menus");
                  this.setState({
                    activeLink: "menus",
                    activeDropdown: "menus",
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
              className={`${handleActive("gallery")}`}
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
