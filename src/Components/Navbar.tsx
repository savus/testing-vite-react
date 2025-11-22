import { Component } from "react";
import "../css/navbar.css";
import type { TVisibleModal } from "../types";

type State = {
  activeLink: "form" | "menu" | "gallery" | "none";
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
          <ul className="ul-defaults-none nav-items nav-js" id="nav-js">
            <li
              className={`${handleActive("form")}`}
              data-open="modal-form-js"
              onClick={() => {
                setVisibleModal("form");
                this.setState({
                  activeLink: "form",
                });
              }}
            >
              Link
            </li>
            <li
              className={`${handleActive("menu")}`}
              onClick={() => {
                this.setState({
                  activeLink: "menu",
                });
              }}
            >
              Link
            </li>
            <li
              className={`${handleActive("gallery")}`}
              onClick={() => {
                this.setState({
                  activeLink: "gallery",
                });
              }}
            >
              Link
            </li>
          </ul>
          <ul className="ul-defaults-none nav-items" id="nav-react">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </nav>
      </>
    );
  }
}
