import "../../css/user-section.css";

export const UserSection = () => {
  return (
    <section
      className="user-section slide active"
      data-animation="slide-in-left"
    >
      <div className="user-format-controls">
        <div className="search-container">
          <input type="text" placeholder="search" className="input" />
        </div>
        <button className="slider-mode btn btn-primary">Slider Mode</button>
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
      </div>
    </section>
  );
};
