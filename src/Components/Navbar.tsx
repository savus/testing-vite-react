import { Component } from "react";
import "../css/navbar.css";
import type { TVisibleModal } from "../types";

export class Navbar extends Component<{
  setVisibleModal: (modal: TVisibleModal) => void;
}> {
  render() {
    const { setVisibleModal } = this.props;
    return (
      <>
        <nav>
          <ul className="ul-defaults-none nav-items nav-js" id="nav-js">
            <li
              data-open="modal-form-js"
              onClick={() => {
                setVisibleModal("form");
              }}
            >
              Link
            </li>
            <li>Link</li>
            <li>Link</li>
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
