import { Component } from "react";
import "../css/navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <ul className="ul-defaults-none nav-items">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
          <ul className="ul-defaults-none nav-items">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </nav>
      </>
    );
  }
}
