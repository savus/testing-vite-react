import { useState } from "react";
import "../../css/user-section.css";

export const UserSection = () => {
  const [testActive, setTestActive] = useState(false);
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
          className={`${testActive ? "active" : ""}`}
          onClick={() => {
            setTestActive(!testActive);
          }}
        >
          <i className="fa-solid fa-chevron-down"></i>
          {`Thing-1`}
          <div className={`options-dropdown`}>
            <div className="select-option">Thing-1</div>
            <div className="select-option">Thing-2</div>
            <div className="select-option">Thing-3</div>
            <div className="select-option">Thing-4</div>
            <div className="select-option">Thing-5</div>
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
