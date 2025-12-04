export const PortfolioCard = ({ image, popupText }) => {
  return (
    <div className="portfolio-card">
      <img src={image} alt="" />
      <div className="popup-box">{popupText}</div>
    </div>
  );
};
