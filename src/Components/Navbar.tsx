import { Component } from "react";
import "../css/navbar.css";
import type { TVisibleModal } from "../types";

type State = {
  activeLink: "form" | "menus" | "gallery" | "none";
};

export class Navbar extends Component<{
  setVisibleModal: (modal: TVisibleModal) => void;
}> {
  state: State = {
    activeLink: "none",
  };

  render() {
    const { setVisibleModal } = this.props;
    const { activeLink } = this.state;

    const handleActive = (linkName: string) =>
      linkName === activeLink ? "active" : "";

    return (
      <>
        <nav>
          <ul className="ul-defaults-none nav-items" id="nav-react">
            <li
              className={`${handleActive("form")}`}
              onClick={() => {
                setVisibleModal("form");
                this.setState({ activeLink: "form" });
              }}
            >
              Form
            </li>
            <li
              className={`${handleActive("menus")}`}
              onClick={() => {
                setVisibleModal("menus");
                this.setState({ activeLink: "menus" });
              }}
            >
              Menus
            </li>
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
