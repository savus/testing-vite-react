import "../../css/user-section.css";

export const UserSection = () => {
  return (
    <section
      className="user-section slide active"
      data-animation="slide-in-left"
    >
      <div className="user-format-controls">
        <div className="search-container">
          <input type="text" placeholder="search" />
        </div>
        <button className="slider-mode">Slider Mode</button>
        <div className="filter-dropdown"></div>
      </div>

      <div className="showcase-container">
        <div className="card">
          <h3 className="name">Jimmusen</h3>
          <div className="details">
            <h3 className="first-name">Jimmy</h3>
            <h4 className="last-name">Musen</h4>
          </div>
          <div className="edit-buttons">
            <button>Edit Mode</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};
