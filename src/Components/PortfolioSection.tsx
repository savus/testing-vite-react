import "../css/portfolio-section.css";
import { Images } from "../Images";

export const PortfolioSection = () => {
  return (
    <section className="portfolio-section container">
      <h2>Portfolio</h2>
      <div className="search-container">
        <label htmlFor="search">
          <input type="text" placeholder="search" id="search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <ul className="ul-defaults-none portfolio-filter-nav">
          <li>portfolio link</li>
          <li>portfolio link</li>
          <li>portfolio link</li>
          <li>portfolio link</li>
          <li>portfolio link</li>
        </ul>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-card">
          <img src={Images.Image1} alt="" />
          <div className="popup-box"></div>
        </div>
        <div className="portfolio-card">
          <img src={Images.Image1} alt="" />
          <div className="popup-box"></div>
        </div>
        <div className="portfolio-card">
          <img src={Images.Image1} alt="" />
          <div className="popup-box"></div>
        </div>
        <div className="portfolio-card">
          <img src={Images.Image1} alt="" />
          <div className="popup-box"></div>
        </div>
        <div className="portfolio-card">
          <img src={Images.Image1} alt="" />
          <div className="popup-box"></div>
        </div>
        <div className="portfolio-card">
          <img src={Images.Image1} alt="" />
          <div className="popup-box"></div>
        </div>
        <div className="portfolio-card">
          <img src={Images.Image1} alt="" />
          <div className="popup-box"></div>
        </div>
        <div className="portfolio-card">
          <img src={Images.Image1} alt="" />
          <div className="popup-box"></div>
        </div>
      </div>
    </section>
  );
};
