import type { TPortfolioCard } from "../../types";

export const PortfolioCard = ({
  cardData: { img, popupHeader, popupText },
}: {
  cardData: TPortfolioCard;
}) => {
  return (
    <div className="portfolio-card">
      <img src={img} alt="" />
      <div className="popup-box">
        <div className="popup-header">{popupHeader}</div>
        <div className="popup-text">{popupText}</div>
      </div>
    </div>
  );
};
